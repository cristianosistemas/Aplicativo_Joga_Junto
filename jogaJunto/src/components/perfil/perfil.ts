import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { Esporte,Posicao } from '../../models/esporte'
import { UsuarioService } from '../../services/usuario.service'
import { CidadeService } from '../../services/cidade.service'
import { EsporteService } from '../../services/esporte.service'
import { Util } from "../../providers/util/util";
import { IonicSelectableComponent } from 'ionic-selectable';
import { ToastService } from '../../services/toast.service'

/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class PerfilComponent implements OnInit{

  public aba = 'dados';

  public cidade : any = { id: 1, name: 'Tokai' };
  public cidades = [];

  public esportes = [];
  public esportesSelecionados = [];
  public posicoes = [];

  cidadeChange(event: {
    component: IonicSelectableComponent,
    value: number
  }) {
    this.usuario.endereco.cidade.id = event.value['id'];
    // console.log('idcidade:', event.value);
  }


  public usuario: Usuario;
  public Util = Util;

  constructor(
    private usuarioService: UsuarioService,
    private cidadeService: CidadeService,
    private esporteService: EsporteService,
    private toastService: ToastService) {
  }

  ngOnInit(){

  }

  buscaCidades(){
    this.cidadeService.buscaTodasCidades().subscribe(
      dados => {

        let data = dados.data;
        this.cidades = data.map( function(x){

          return {'id': x.id,'name': x.nome}
        });
        //this.cidade = this.cidades.filter(x => x.id == this.usuario.endereco.cidade.id)[0];

        this.cidade = {'id': this.usuario.endereco.cidade.id, 'name': this.usuario.endereco.cidade.nome};

      },
      erro => {
        console.log(erro);

      }
    );
  }

  buscaEsportes(){
    this.esporteService.buscaTodasEsportes().subscribe(
      dados => {
        this.esportes = dados.data;
        for(let i = 0; i < this.usuario.posicoes.length; i++){
          this.esportesSelecionados.push(this.usuario.posicoes[i].esporte);
        }
        // this.esporte = this.esporte. maickel aqui filtrar para remover os duplicados
        // console.log(this.usuario);
        // this.esporte = this.usuario.posicoes
      }
    )
  }

  possuiPosicao(posicao: Posicao){
    return this.usuario.posicoes.indexOf(posicao) >= 0;
  }

  salvar(){
    this.usuarioService.salvarUsuario(this.usuario).subscribe(
      dados => {
        this.toastService.toast("Dados salvos com sucesso!");
      },
      erro => {
        this.toastService.toast("Erro ao salvar os dados");
        console.log(erro);
      }
    );
  }

  buscaCep(){
    this.usuarioService.buscarCep(this.usuario.endereco.cep).subscribe(
      dados => {
        this.usuario.endereco.logradouro = dados.logradouro;
        this.usuario.endereco.bairro = dados.bairro;
        this.cidadeService.buscaPorIbge(dados.ibge).subscribe(
          dados => {
            console.log(dados);
            this.usuario.endereco.cidade = dados;
            this.cidade.id = dados.id;
            this.cidade.name = dados.nome;
          },
          erro => console.log(erro)
        )
      },
      erro => {
        this.toastService.toast("Não localizamos o cep informado!");
      }
    );
  }

  ionViewCanEnter() {
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
              // console.log(response);
              this.usuario = response;

              console.log(this.usuario);
              this.buscaCidades();
              this.buscaEsportes();
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Evento: "+error)
            },
            ()=> {
              console.log('Carregou Informações do Evento');
            });

      })
  }

}
