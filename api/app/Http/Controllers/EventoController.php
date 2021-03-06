<?php

namespace App\Http\Controllers;

use App\Evento;
use App\Esporte;
use App\Usuario;
use App\UsuarioEvento;
use App\Local;
use App\Endereco;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Exception;

use App\Http\Resources\UsuarioEvento as UsuarioEventoResource;
use App\Http\Resources\Evento as EventoResource;
use App\Http\Resources\Usuario as UsuarioResource;
use App\Http\Controllers\NotificacaoController;
use App\Notificacao;
use Illuminate\Http\Request;



class EventoController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
  }

  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    //
  }

  public function show($id) {

      return new EventoResource(Evento::with('participantes', 'participantes.avaliacoes', 'participantes.avaliacoes.usuarioAvaliador','participantes.usuario')->find($id));
  }

  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request){
    $dados = json_decode($request->getContent());
    $eventoDados = $dados->evento;
    $convidados = $dados->convidados;


    try{

      DB::beginTransaction();
      $evento = new Evento();
      $localId = $eventoDados->local->id;
      if($localId == -1){
        $endereco = new Endereco();
        $endereco->cidade_id = Auth::user()->endereco->cidade_id;
        $endereco->logradouro = $eventoDados->local->endereco->logradouro;
        $endereco->bairro = $eventoDados->local->endereco->bairro;
        $endereco->cep = '';
        $endereco->save();

        $local = new Local();
        $local->endereco_id = $endereco->id;
        $local->nome=$eventoDados->local->nome;
        $local->usuarioResponsavel_id = Auth::user()->id;
        $local->valido = false;
        $local->latitude = Auth::user()->latitude;
        $local->longitude = Auth::user()->longitude;
        $local->imagem = 'default.png';
        $local->save();

        $esporte = Esporte::find($eventoDados->esporte->id);
        $local->esportes()->attach($esporte);

        $localId = $local->id;

      }

      $evento->local_id = $localId;
      $evento->usuarioResponsavel_id = Auth::user()->id;
      $evento->esporte_id = $eventoDados->esporte->id;
      $evento->dataRealizacao = $eventoDados->dataRealizacao;
      $evento->horario = $eventoDados->horario;
      $evento->descricao = $eventoDados->descricao;
      $evento->vagas = $eventoDados->vagas;
      $evento->publico = isset($eventoDados->publico) ? $eventoDados->publico : false;
      $evento->valorCusto = isset($eventoDados->valor) ? $eventoDados->valor : 0;

      $evento->save();

      $eventoUsuario = new UsuarioEvento();
      $eventoUsuario->usuario_id = Auth::user()->id;
      $eventoUsuario->evento_id = $evento->id;
      $eventoUsuario->dataConfirmacao = Carbon::now();
      $eventoUsuario->situacao = 'CONFIRMADO';
      $eventoUsuario->save();


      $notControler = new NotificacaoController();
      $emails = [];
      foreach($convidados as $convidado){
        if($convidado->_objectInstance->emails != null){
          foreach ($convidado->_objectInstance->emails as $email) {
            if($email->value != Auth::user()->email)
              array_push($emails, $email->value);
          }
        }
      }

      $usuariosConvidados = Usuario::whereIn('email', $emails)->get();

      foreach ($usuariosConvidados as $usuarioconvidado) {
        $participante = new UsuarioEvento();
        $participante->usuario_id = $usuarioconvidado->id;
        $participante->evento_id = $evento->id;
        $participante->save();
        // dd($participante);
        $notControler->notificarConvite($usuarioconvidado, $evento);

      }

      if($evento->local->valido){
        //Notificar proprietario do Local
      }

      DB::commit();

      return response()->json($evento);
    }catch(Exception $ex){
      DB::rollback();
      return response()->json($ex->getMessage(), 400);
    }
  }

  public function getEventosPendentes($usuarioId=null){


    if($usuarioId == null)
      $usuarioId = Auth::user()->id;

      $eventosId = DB::table('usuario_evento')
      ->join('eventos', 'eventos.id', '=', 'usuario_evento.evento_id')
      ->where('usuario_evento.usuario_id',$usuarioId)
      ->where('usuario_evento.situacao', 'PENDENTE')
      ->where('usuario_evento.deleted_at', NULL)
      ->where('usuario_evento.dataConfirmacao', NULL)
      ->where('usuario_evento.dataExclusao', NULL)
      ->where('eventos.dataRealizacao', '>=', Carbon::now())->select('eventos.id')->get()->map(function($dado){return ($dado->id);})->toArray();


      return EventoResource::collection(
        Evento::whereIn('id', $eventosId)->get()
      );

  }


  public function getProximosEventosPendentes($usuarioId=null){


    if($usuarioId == null)
      $usuarioId = Auth::user()->id;
    
      $eventosId = DB::table('usuario_evento')
      ->join('eventos', 'eventos.id', '=', 'usuario_evento.evento_id')
      ->where('usuario_evento.usuario_id',$usuarioId)
      ->whereIn('usuario_evento.situacao', ['CONFIRMADO'])
      ->where('usuario_evento.deleted_at', NULL)
      ->where('usuario_evento.dataConfirmacao', '<>',NULL)
      ->where('usuario_evento.dataExclusao', NULL)
      ->where('eventos.dataRealizacao', '>=', Carbon::now())->select('eventos.id')->get()->map(function($dado){return ($dado->id);})->toArray();


      return EventoResource::collection(
        Evento::whereIn('id', $eventosId)->orderBy('dataRealizacao')->get()
      );

  }


  public function aceitarConvite($eventoId) {
    try{
      DB::beginTransaction();

        $participacao = UsuarioEvento::where('usuario_id', Auth::user()->id)->where('evento_id', $eventoId)
        ->where('situacao', 'PENDENTE')->firstOrFail();

        $participacao->situacao = 'CONFIRMADO';
        $participacao->dataConfirmacao = Carbon::now();
        $participacao->save();

      DB::commit();
      return response()->json('Convite Aceito com sucesso');
    }catch(Exception $e){
      DB::rollback();

      return response()->json('Erro ao tentar Aceitar o convite: ' . $e->getMessage(), 400);
    }

    return response()->json('Erro', 400);

 }

 public function cancelarParticipacao($eventoId, Request $request){
  try{
    DB::beginTransaction();

      $participacao = UsuarioEvento::where('usuario_id', Auth::user()->id)->where('evento_id', $eventoId)
      ->whereIn('situacao', ['CONFIRMADO', 'PENDENTE'])->firstOrFail();

      $participacao->situacao = "CANCELADO";
      $participacao->dataCancelamento = Carbon::now();
      $participacao->justificativa = $request->json()->get('justificativa');

      $participacao->save();

    DB::commit();
    return response()->json('Cancelamento de particação efetuado com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar cancelar a participação: ' . $e->getMessage(), 400);
  }

  return response()->json('Erro', 400);
 }




 public function recusarConvite($eventoId) {
  try{
    DB::beginTransaction();

      $participacao = UsuarioEvento::where('usuario_id', Auth::user()->id)->where('evento_id', $eventoId)
      ->where('situacao', 'PENDENTE')->firstOrFail();

      $participacao->delete();

    DB::commit();
    return response()->json('Convite Aceito com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar Aceitar o convite: ' . $e->getMessage(), 400);
  }

  return response()->json('Erro', 400);
}

public function aceitarParticipante($UsuarioEventoId) {
  try{
    DB::beginTransaction();

      $participante = UsuarioEvento::with('usuario', 'evento')->findOrFail($UsuarioEventoId);

      throw_if($participante->evento->usuarioResponsavel_id != Auth::user()->id, Exception::class ,"Somente usuário responsável pode Aceitar participantes");
      $evento = $participante->evento;
      $dataEvento = $evento->dataRealizacao;
      $horario = explode(':', $evento->horario);
      $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
      throw_if(Carbon::now() > $dataEvento, Exception::class ,"Evento encerrado não pode aceitar novos participantes");

      $participante->dataConfirmacao = Carbon::now();
      $participante->situacao = "CONFIRMADO";
      $participante->save();

      $notControler = new NotificacaoController();
      $notControler->notificarAceiteParticipacao($participante, $evento);

      DB::commit();
    return response()->json('Participante aceito com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar Aceitar o participante: ' . $e->getMessage(), 400);
  }

}

public function recusarParticipante($UsuarioEventoId, Request $request) {
  try{
    DB::beginTransaction();

      $participante = UsuarioEvento::with('usuario', 'evento')->findOrFail($UsuarioEventoId);

      throw_if($participante->evento->usuarioResponsavel_id != Auth::user()->id, Exception::class ,"Somente usuário responsável pode Recusar participantes");
      $evento = $participante->evento;
      $dataEvento = $evento->dataRealizacao;
      $horario = explode(':', $evento->horario);
      $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
      throw_if(Carbon::now() > $dataEvento, Exception::class ,"Evento encerrado não pode recusar participantes");


      $participante->justificativa =  $request->json()->get('justificativa');
      $participante->save();

      $notControler = new NotificacaoController();


      $notControler->notificarRecusaParticipacao($participante, $evento);
      $participante->delete();

      DB::commit();
    return response()->json('Participante recusado com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar recusar o participante: ' . $e->getMessage(), 400);
  }
}



public function removerParticipante($UsuarioEventoId, Request $request) {

  try{
    DB::beginTransaction();

      $participante = UsuarioEvento::with('usuario', 'evento')->findOrFail($UsuarioEventoId);

      throw_if($participante->evento->usuarioResponsavel_id != Auth::user()->id, Exception::class ,"Somente usuário responsável pode remover participantes");
      $evento = $participante->evento;
      $dataEvento = $evento->dataRealizacao;
      $horario = explode(':', $evento->horario);
      $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
      throw_if(Carbon::now() > $dataEvento, Exception::class ,"Evento encerrado não pode remover participantes");


      $participante->justificativa =  $request->json()->get('justificativa');
      $participante->dataExclusao = Carbon::now();
      $participante->situacao = "EXCLUIDO";
      $participante->save();

      $notControler = new NotificacaoController();


      $notControler->notificarRemocaoParticipacao($participante, $evento);
      $participante->delete();

      DB::commit();
    return response()->json('Participante removido com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar remover o participante: ' . $e->getMessage(), 400);
  }
}

public function cancelarEvento($eventoId, Request $request) {

  try{
    DB::beginTransaction();

      $evento = Evento::with( 'participantes')->findOrFail($eventoId);
      throw_if($evento->usuarioResponsavel_id != Auth::user()->id, Exception::class ,"Somente usuário responsável pode cancelar o evento");
      $dataEvento = $evento->dataRealizacao;
      $horario = explode(':', $evento->horario);

      $dataEvento->setTime($horario[0], $horario[1], $horario[2]);
      throw_if(Carbon::now() > $dataEvento, Exception::class ,"Evento encerrado não pode ser cancelado");


      $evento->dataCancelamento = Carbon::now();
      $evento->justificativaCancelamento = $request->json()->get('justificativa');
      $evento->save();

      $notControler = new NotificacaoController();

      if($evento->local->valido){
        // Notificar ao responsavel pelo local
      }

      foreach ($evento->participantes as $participante) {

        if($participante->dataCancelamento == null && $participante->dataExclusao == null){

          $notControler->notificarCancelamentoEvento($participante, $evento);
        }
      }


    DB::commit();
    return response()->json('Evento cancelado com sucesso');
  }catch(Exception $e){
    DB::rollback();

   return response()->json('Erro ao tentar Cancelar o evento: ' . $e->getMessage(), 400);
  }

  return response()->json('Erro', 400);
}

    public function getEventosProximosUsuario() {
       return UsuarioEventoResource::collection(
           UsuarioEvento::where(['usuario_id' => Auth::user()->id, 'situacao' => 'PENDENTE'])->get()
       );
    }

    public function getEventosRegiaoUsuario($lat, $lng) {
      $results = DB::select(
        "
        SELECT
        e.*
        FROM eventos e
        join locais l on l.id = e.local_id
        WHERE \"dataRealizacao\" BETWEEN DATE(NOW()) AND DATE( (NOW() + INTERVAL '+ 3 DAYS') )
        AND \"dataCancelamento\" IS NULL
        GROUP BY l.id, e.id
        HAVING (
           6371 *
           acos(cos(radians($lat)) *
           cos(radians(CAST(l.latitude AS DOUBLE PRECISION))) *
           cos(radians(CAST(l.longitude AS DOUBLE PRECISION)) -
           radians($lng)) +
           sin(radians($lat)) *
           sin(radians(CAST(l.latitude AS DOUBLE PRECISION) )))
        ) < 10
        LIMIT 20;
        "
        );
        //$results = collect($results)->map(function($dado){return ($dado->id);})->toArray();

        //$results = Evento::with('participantes', 'participantes.usuario')->whereIn('id',$results)->get();


       return EventoResource::collection(
          Evento::hydrate($results)
       );
    }


    public function usuariosProximos($eventoId) {

      $evento = Evento::with('participantes')->find($eventoId);
      $esporteId = $evento->esporte_id;

      $idsExclusao = $evento->participantes->map(function($x){ return $x->usuario_id; })->toArray();
//      $ids = implode(",",$idsExclusao);

      $meuId = Auth::user()->id;
      $lat = Auth::user()->latitude;
      $lng = Auth::user()->longitude;
      
      $results = DB::select(
        "
        SELECT u.*
        FROM usuarios u
        inner join usuario_posicao up on up.usuario_id = u.id
        inner join posicoes p on up.posicao_id = p.id
        inner join esportes e on e.id = p.esporte_id
        WHERE e.id = $esporteId 
        AND u.id <> $meuId

        GROUP BY u.id
        HAVING (
           6371 *
           acos(cos(radians($lat)) *
           cos(radians(CAST(u.latitude AS DOUBLE PRECISION))) *
           cos(radians(CAST(u.longitude AS DOUBLE PRECISION)) -
           radians($lng)) +
           sin(radians($lat)) *
           sin(radians(CAST(u.latitude AS DOUBLE PRECISION) )))
        ) < 20
        LIMIT 50;
        "
        );
        //$results = collect($results)->map(function($dado){return ($dado->id);})->toArray();

        //$results = Evento::with('participantes', 'participantes.usuario')->whereIn('id',$results)->get();


       return UsuarioResource::collection(
          Usuario::hydrate($results)->whereNotIn('id', $idsExclusao)
       );
    }
}
