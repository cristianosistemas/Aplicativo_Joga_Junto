import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { Items } from '../mocks/providers/items';
import { MessageMocks } from '../mocks/messageMocks';
import { MyApp } from './app.component';
import { HttpProvider } from '../providers/http/http';
import { Util } from '../providers/util/util';


import { UserProvider } from '../providers/user/user';
import { LoginService } from '../services/login.service'
import { ToastService } from '../services/toast.service'
import { CidadeService } from '../services/cidade.service'
import { EsporteService } from '../services/esporte.service'


import {EventosComponent} from "../components/eventos/eventos";
import {ConfirmacaoComponent} from "../components/confirmacao/confirmacao";
import {EventoService} from "../services/evento.service";
import {UsuarioService} from "../services/usuario.service";
import {EventoComponent} from "../components/evento/evento";
import {PerfilComponent} from "../components/perfil/perfil";

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent
  ],
  exports: [
    EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent
  ],
  imports: [
    IonicSelectableModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent
  ],
  providers: [
    Items,
    SplashScreen,
    StatusBar,
    MessageMocks,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    Util,
    UserProvider,
    LoginService,
    ToastService,
    EventoService,
    UsuarioService,
    CidadeService,
    EsporteService
  ]
})
export class AppModule { }
