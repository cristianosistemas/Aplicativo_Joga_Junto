import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController, Events } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import { HttpProvider } from "../../providers/http/http";
import { Usuario } from "../../models/usuario";
import { LoginService, UsuarioService } from '../../services'
import { ToastService } from '../../services/toast.service'
import { EventosComponent } from "../../components/eventos/eventos";
import { ConfirmacaoComponent } from "../../components/confirmacao/confirmacao"
import { LoadingController } from 'ionic-angular';

import { Push , PushOptions, PushObject} from '@ionic-native/push';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/**
* @author: KMR
* @email: yajuve.25.dz@gmail.com
*/



export class LoginPage implements OnInit {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }

  public usuario : Usuario =  new Usuario();
  public errosss : String;

  private cadastro: boolean = false;
  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'signin';

  ngOnInit(){



    }

    constructor( private push: Push,
      public http:HttpProvider,
      public userProvider: UserProvider,
      public menuCtrl: MenuController,
      public navCtrl: NavController,
      public translateService: TranslateService,
      private loginService: LoginService,
      private usuarioService: UsuarioService,
      private toastService : ToastService,
      public events: Events,
      private loadingCtrl:LoadingController) {

        this.menuCtrl.enable(false);
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
          this.loginErrorString = value;
        });

        // this.push.hasPermission().then();

        this.push.hasPermission()
        .then((res: any) => {

          if (res.isEnabled) {
            // this.toastService.toast('Possui Permissão!!!');
            const options: PushOptions = {
              android: {},
              ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
              },
              windows: {},
              browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
              }
            };
            const pushObject: PushObject = this.push.init(options);
            pushObject.on('notification').subscribe((notification: any) => {
              alert(notification.message);
            });

            pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

            pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

          }
          // } else {
          //   this.toastService.toast('NÃO possui permissão!!!');
          // }

        });



      }




      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };

      maxDataNasc(){
        let max = new Date();
        max.setFullYear(max.getFullYear() - 18);
        return max;
      }

      login(){
        let loading = this.loading();
        loading.present();
        this.loginService.login(this.usuario.username, this.usuario.password)
        .subscribe(
          dados =>{
            this.sleep(1000).then(
              () => {
                this.usuarioService.atualizaPosicao();
                this.toastService.toast("Bem Vindo " + this.usuario.username );
                loading.dismiss();
                if(this.loginService.getUsuarioLogado().email_verified_at == null){
                  this.goToConfirmacao();
                }else{
                  this.events.publish('user:loggedin');
                  this.goToListaEventos();
                }
              }
            )


          },
          error => {
            switch(error.status){
              case 0:
              this.toastService.toast("O Servidor remoto recusou a conexão, tente novamente mais tarde");
              break;
              case 401:
              this.toastService.toast("Credenciais inválidas");
              this.usuario.username = '';
              this.usuario.password = '';
              this.loginService.clearCredenciais();
              break;
              default:
              this.toastService.toast("Ocorreu um erro na sua tentativa de login");
              // this.toastService.toast(JSON.stringify(error));
              this.errosss = JSON.stringify(error);

            }
            loading.dismiss()
            console.log(error.statusCode);
            console.log(JSON.stringify(error));
          },
          ()=> loading.dismiss());
        }

        cadastrar(){
          let loading = this.loading();
          loading.present();
          console.log(JSON.stringify(this.usuario));
          this.loginService.cadastrar(this.usuario)
          .subscribe(
            x => {
              // console.log("Deu Certo " + JSON.stringify(this.usuario));
              loading.dismiss();
              this.login();
            },
            error =>{
              console.log(error);
              let erros = error.error;
              if(Array.isArray(erros)){
                let erro = "";
                for(let i=0; i< erros.length; i++){
                  erro += (erros[i]) + "\n";
                }
                this.toastService.toast(erro);
              }else{
                this.toastService.toast(erros);
              }
              loading.dismiss();
            },
            () => loading.dismiss()
          );

        }

        ionViewWillEnter(){

          if(!this.loginService.estaLogado()){
            let credenciais =  this.loginService.getCredenciais().then(
              dados => {
                if(dados != null ){
                  let cred = JSON.parse(dados);
                  this.usuario.username = cred.login;
                  this.usuario.password = cred.senha;
                  this.login();
                }

              })

            }else{
              console.log("Esta logado");
              if(this.loginService.getUsuarioLogado().email_verified_at != undefined)
              this.goToListaEventos();
              else
              this.goToConfirmacao();
            }
        }

        goToListaEventos() {
          this.navCtrl.push(EventosComponent);
          // console.log('Vai pra página de eventos');
        }
        goToConfirmacao(){
          // console.log('Vai pra página de confirmacao');
          this.navCtrl.push(ConfirmacaoComponent);
        }

      }
