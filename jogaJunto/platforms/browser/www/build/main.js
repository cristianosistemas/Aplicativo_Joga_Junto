webpackJsonp([5],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the UserProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var UserProvider = (function () {
    function UserProvider() {
        this._user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["b" /* User */]();
        console.log('Hello UserProvider Provider');
    }
    Object.defineProperty(UserProvider.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CidadeService = (function () {
    function CidadeService(http, login) {
        this.http = http;
        this.login = login;
    }
    CidadeService.prototype.buscaTodasCidades = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/cidade?per_page=500", { headers: headers });
    };
    CidadeService.prototype.buscaPorIbge = function (codigo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/cidade/ibge/" + codigo, { headers: headers });
    };
    CidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], CidadeService);
    return CidadeService;
}());

//# sourceMappingURL=cidade.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_util__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
* Generated class for the EventoComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
var EventoComponent = (function () {
    function EventoComponent(eventoService, viewCtrl, navParams, loginService, alertCtrl, toastService, loadingCtrl) {
        this.eventoService = eventoService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.Util = __WEBPACK_IMPORTED_MODULE_0__providers_util_util__["a" /* Util */];
        this.cancelado = false;
        this.encerrado = false;
        this.euParticipo = false;
        this.euOrganizo = false;
        this.participantesConfirmados = [];
        this.participantesPendentes = [];
        this.solicitacoesPendentes = [];
    }
    EventoComponent.prototype.ionViewDidLoad = function () {
        // TESTE DO MAPREF console.log(this.mapRef);
    };
    EventoComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.navParams.get('fail')) {
                reject(true);
            }
            else {
                _this.eventoService.carregaEvento(_this.navParams.get('id')).subscribe(function (response) {
                    _this.evento = response;
                    _this.cancelado = _this.evento.dataCancelamento != null;
                    var dataRealizacao = _this.evento.dataRealizacao.toString().split('/');
                    var horas = _this.evento.horario.split(':');
                    var agora = new Date();
                    var data = new Date();
                    data.setDate(parseInt(dataRealizacao[0]));
                    data.setMonth(parseInt(dataRealizacao[1]));
                    data.setFullYear(parseInt(dataRealizacao[2]));
                    data.setHours(parseInt(horas[0]));
                    data.setMinutes(parseInt(horas[1]));
                    _this.encerrado = (data < agora);
                    _this.euOrganizo = _this.evento.usuarioResponsavel.id == _this.loginService.getUsuarioLogado().id;
                    _this.euParticipo = (_this.evento.participantes.
                        filter(function (x) { return x.usuario.id == _this.loginService.getUsuarioLogado().id && x.situacao == "CONFIRMADO"; }).length > 0);
                    _this.participantesConfirmados = _this.evento.participantes.filter(function (x) { return x.situacao == "CONFIRMADO"; });
                    _this.participantesPendentes = _this.evento.participantes.filter(function (x) { return x.situacao == "PENDENTE" && x.dataConfirmacao == null; });
                    _this.solicitacoesPendentes = _this.evento.participantes.filter(function (x) { return x.situacao == "PENDENTE" && x.dataConfirmacao != null; });
                    _this.minhaSolicitacaoPendente = _this.solicitacoesPendentes.filter(function (x) { return x.usuario_id == _this.loginService.getUsuarioLogado().id; })[0];
                    resolve(response);
                }, function (error) {
                    console.log("Erro ao Carregar Evento" + error);
                }, function () {
                    // console.log('Carregou Informações do Evento');
                    _this.mostraMapa();
                });
            }
        });
    };
    EventoComponent.prototype.mostraMapa = function () {
        var localizacao = new google.maps.LatLng(this.evento.local.latitude, this.evento.local.longitude);
        var options = {
            center: localizacao,
            zoom: 4
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(localizacao, map);
    };
    EventoComponent.prototype.addMarker = function (pos, map) {
        // console.log("Add Marker")
        return new google.maps.Marker({
            pos: pos,
            map: map
        });
    };
    EventoComponent.prototype.confirmarCancelarEvento = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmação de cancelamento do evento',
            inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min: 3 }],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.cancelarEvento(data.justificativa);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.cancelarEvento = function (justificativa) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.cancelarEvento(this.evento.id, justificativa).subscribe(function (dados) {
            loading.dismiss();
            _this.toastService.toast("Evento Cancelado!");
            _this.evento.dataCancelamento = new Date();
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível cancelar o evento, tente novamente");
        });
    };
    EventoComponent.prototype.confirmarCancelarParticipacao = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmação de Saída de evento',
            inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min: 3 }],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.cancelarParticipacao(data.justificativa);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.cancelarParticipacao = function (justificativa) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.cancelarParticipacao(this.evento.id, justificativa).subscribe(function (dados) {
            loading.dismiss();
            _this.toastService.toast("Cancelamento efetivado!");
            _this.participantesConfirmados = _this.participantesConfirmados.filter(function (x) { return x.usuario.id != _this.loginService.getUsuarioLogado().id; });
            _this.participantesPendentes = _this.participantesPendentes.filter(function (x) { return x.usuario.id != _this.loginService.getUsuarioLogado().id; });
            _this.minhaSolicitacaoPendente = null;
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível cancelar sua participação, tente novamente");
        });
    };
    // Area de aceitar / recusar parcitipantes
    EventoComponent.prototype.confirmarAceitarParticipanteEvento = function (solicitacao) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Aceitar Participante ' + solicitacao.usuario.nome,
            // inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min:3  } ],
            buttons: [
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        _this.aceitarParticipanteEvento(solicitacao.id);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.aceitarParticipanteEvento = function (idSolicitacao) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.aceitarParticipanteEvento(idSolicitacao).subscribe(function (dados) {
            loading.dismiss();
            var i = _this.solicitacoesPendentes.filter(function (x) { return x.id == idSolicitacao; });
            _this.participantesConfirmados.push(i[0]);
            _this.solicitacoesPendentes = _this.solicitacoesPendentes.filter(function (x) { return x.id != idSolicitacao; });
            _this.toastService.toast("Convidado Aceito!");
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível efetivar o aceite, tente novamente mais tarde.");
        });
    };
    EventoComponent.prototype.confirmarRecusarParticipanteEvento = function (solicitacao) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Recusar Participante: ' + solicitacao.usuario.nome,
            inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min: 3 }],
            buttons: [
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.recusarParticipanteEvento(solicitacao.id, data.justificativa);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.recusarParticipanteEvento = function (idSolicitacao, justificativa) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.recusarParticipanteEvento(idSolicitacao, justificativa).subscribe(function (dados) {
            loading.dismiss();
            _this.solicitacoesPendentes = _this.solicitacoesPendentes.filter(function (x) { return x.id != idSolicitacao; });
            _this.toastService.toast("Usuário Recusado!");
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível recusar a solicitacao tente novamente mais tarde.");
        });
    };
    EventoComponent.prototype.confirmarRemoverParticipanteEvento = function (solicitacao) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remover: ' + solicitacao.usuario.nome + ' do evento',
            inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min: 3 }],
            buttons: [
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.removerParticipanteEvento(solicitacao.id, data.justificativa);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.removerParticipanteEvento = function (idSolicitacao, justificativa) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.removerParticipanteEvento(idSolicitacao, justificativa).subscribe(function (dados) {
            loading.dismiss();
            _this.participantesPendentes = _this.participantesPendentes.filter(function (x) { return x.id != idSolicitacao; });
            _this.participantesConfirmados = _this.participantesConfirmados.filter(function (x) { return x.id != idSolicitacao; });
            _this.toastService.toast("Usuário Removido!");
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível remover, tente novamente mais tarde.");
        });
    };
    EventoComponent.prototype.confirmarSolicitarParticipacao = function (evento) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Solicitar Participação',
            inputs: [{ name: 'mensagem', placeholder: 'Mensagem', min: 3 }],
            buttons: [
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Solicitar',
                    handler: function (data) {
                        _this.solicitarParticipacao(evento.id, data.mensagem);
                    }
                }
            ]
        });
        alert.present();
    };
    EventoComponent.prototype.solicitarParticipacao = function (idEvento, justificativa) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.solicitarParticipacao(idEvento, justificativa).subscribe(function (dados) {
            loading.dismiss();
            _this.minhaSolicitacaoPendente = dados;
            _this.solicitacoesPendentes.push(dados);
            _this.toastService.toast("Solicitação enviada, aguarde a análise do organizador!");
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Não foi possível enviar sua solicitação, tente novamente mais tarde.");
        });
    };
    EventoComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], EventoComponent.prototype, "mapRef", void 0);
    EventoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'evento',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/evento/evento.html"*/`<!-- Generated template for the EventoComponent component -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()"></button>\n    </ion-buttons>\n\n    <ion-title>\n      Visualizar Evento\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-branco">\n  <ion-row>\n    <ion-col col-5>\n      <ion-card>\n        <img [src]="Util.pathImg(evento.local.imagem)"/>\n        <ion-card-content style="background-color: white">\n          <p>\n            {{ evento.local.descricao }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-7>\n      <p>{{ evento.descricao }}</p>\n      <p>{{ evento.esporte.nome }} </p>\n      <p>\n        <span icon-start clear small>\n          <ion-icon name="calendar"> {{ evento.dataRealizacao }}</ion-icon>{{ evento.horario }}\n        </span>\n      </p>\n      <p>Organizador: {{evento.usuarioResponsavel.nome}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="(evento.dataCancelamento != null)">\n    <H1>Evento Cancelado</H1>\n    <p>Cancelado por {{evento.usuarioResponsavel.nome}} em {{evento.dataCancelamento | date : \'dd/MM/yy hh:mm\'}}h</p>\n    <p>Motivo: {{evento.justificativaCancelamento}}</p>\n  </ion-row>\n\n  <ion-row *ngIf="(encerrado)">\n    <H1>Evento Encerrado</H1>\n    <!-- <p>Cancelado por {{evento.usuarioResponsavel.nome}} em {{evento.dataCancelamento | date : \'dd/MM/yy hh:mm\'}}h</p> -->\n  </ion-row>\n\n  <div *ngIf="minhaSolicitacaoPendente != null">\n\n    <h4>Participação Solicitada</h4>\n    <ion-row style="color: teal">\n      <ion-col col-8>\n        <p>{{ minhaSolicitacaoPendente.dataConfirmacao | date }}</p>\n      </ion-col>\n      <ion-col col-4>\n        <p>Cancelar\n          <button (click)="confirmarCancelarParticipacao()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div *ngIf="euOrganizo && !encerrado && !cancelado && solicitacoesPendentes.length > 0">\n\n    <h4>Solicitações pendentes</h4>\n    <ion-row *ngFor="let p of solicitacoesPendentes" style="color: teal">\n      <ion-col col-8>\n        <p>{{ p.usuario.nome }}</p>\n      </ion-col>\n      <ion-col col-2>\n        <button (click)="confirmarAceitarParticipanteEvento(p)">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button (click)="confirmarRecusarParticipanteEvento(p)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <ion-row>\n    <ion-col col-6>\n      <h4>Confirmados</h4>\n      <div *ngFor="let p of participantesConfirmados" style="color: teal">\n        <p>{{ p.usuario.nome }}\n          <button *ngIf="euOrganizo && !encerrado && !cancelado" (click)="confirmarRemoverParticipanteEvento(p)">\n          <ion-icon name="close"></ion-icon>\n        </button></p>\n      </div>\n    </ion-col>\n\n    <ion-col col-6 *ngIf="euParticipo">\n      <h4>Pendentes</h4>\n      <div *ngFor="let p of participantesPendentes" style="color: teal">\n        <p>{{ p.usuario.nome }}\n          <button *ngIf="euOrganizo && !encerrado && !cancelado" (click)="confirmarRemoverParticipanteEvento(p)">\n        <ion-icon name="close"></ion-icon>\n      </button></p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab bottom right *ngIf="!euParticipo" >\n\n    <button (click)="confirmarSolicitarParticipacao(evento)" [disabled]="(!evento.publico || minhaSolicitacaoPendente != null)">\n      <ion-icon name="add-circle"></ion-icon>\n      <div class="label">Solicitar Participação</div>\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom right *ngIf="euOrganizo" >\n\n    <button (click)="confirmarCancelarEvento()" [disabled]="(evento.dataCancelamento != null)">\n      <ion-icon name="close"></ion-icon>\n      <div class="label">Cancelar Evento</div>\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom right *ngIf="!euOrganizo && euParticipo">\n\n    <button (click)="confirmarCancelarParticipacao()" [disabled]="(evento.dataCancelamento != null)">\n      <ion-icon name="close"></ion-icon>\n      <div class="label">Cancelar participação</div>\n    </button>\n\n\n  </ion-fab>\n\n\n  <ion-row padding>\n    <div id="map" #map></div>\n  </ion-row>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/evento/evento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* LoadingController */]])
    ], EventoComponent);
    return EventoComponent;
}());

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmaParticipacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventos_eventos__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ConfirmaParticipacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConfirmaParticipacaoComponent = (function () {
    function ConfirmaParticipacaoComponent(eventoService, navCtrl, toastService, loadingCtrl) {
        this.eventoService = eventoService;
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
    }
    ConfirmaParticipacaoComponent.prototype.ngOnInit = function () {
        this.buscaEventosPendentes();
    };
    ConfirmaParticipacaoComponent.prototype.buscaEventosPendentes = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.buscaMeusEventosPendentes().subscribe(function (dados) {
            _this.listaEventos = dados;
            loading.dismiss();
            console.log(dados);
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.listaEventos = [];
            _this.toastService.toast("Erro ao carregar a lista de eventos, tente novamente mais tarde!");
        });
    };
    ConfirmaParticipacaoComponent.prototype.aceitarConvite = function (evento) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.aceitarConvite(evento).subscribe(function (dados) {
            _this.listaEventos = _this.listaEventos.filter(function (x) { return x.id != evento.id; });
            loading.dismiss();
            _this.toastService.toast("Sua participacao foi confirmada no evento do " + evento.usuarioResponsavel.nome + "!");
            console.log(dados);
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Erro ao tentar aceitar o convite, tente novamente mais tarde!");
        });
    };
    ConfirmaParticipacaoComponent.prototype.recusarConvite = function (evento) {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.eventoService.recusarConvite(evento).subscribe(function (dados) {
            _this.listaEventos = _this.listaEventos.filter(function (x) { return x.id != evento.id; });
            loading.dismiss();
            _this.toastService.toast("O convite para o evento do " + evento.usuarioResponsavel.nome + "  foi recusado!");
            console.log(dados);
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Erro ao tentar recusar o convite, tente novamente mais tarde!");
        });
    };
    ConfirmaParticipacaoComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    ConfirmaParticipacaoComponent.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__eventos_eventos__["a" /* EventosComponent */]);
    };
    ConfirmaParticipacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'confirma-participacao',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirma-participacao/confirma-participacao.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Meus Convites</ion-title>\n    <ion-buttons left>\n    <button ion-button icon-only (click)="voltar()">\n      <!-- <ion-icon name="arrow-back"></ion-icon> -->\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="listaEventos?.length == 0">\n    <p>Pronto, no momento não tem mais nenhuma solicitação pendente...</p>\n    <p>Aproveite seu dia!</p>\n\n  </div>\n\n  <ion-card class="bg-branco" *ngFor="let evento of listaEventos">\n    <ion-card-content>\n      <ion-card-title>\n        {{ evento.descricao }}\n\n      </ion-card-title>\n      <ion-row>\n        <ion-col>\n          <p><strong>Organizador:</strong> {{evento.usuarioResponsavel.nome}}</p>\n        </ion-col>\n        <ion-col>\n          <p><strong>Local:</strong> {{evento.local.nome}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n        <ion-col>\n          <span icon-start clear small>\n            <ion-icon name="calendar">{{ evento.dataRealizacao }}</ion-icon>\n          </span>\n        </ion-col>\n        <ion-col>\n          <span icon-start clear small>\n            <ion-icon name="alarm">{{ evento.horario }}</ion-icon>\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col align-self-center>\n          <button ion-button icon-start clear medium (click)="recusarConvite(evento)">\n            <ion-icon name="close"></ion-icon>\n            <div>Recusar</div>\n          </button>\n        </ion-col>\n        <ion-col align-self-center>\n          <button ion-button icon-start clear medium (click)="aceitarConvite(evento)">\n            <ion-icon name="checkmark"></ion-icon>\n            <div>Confirmar</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n<ion-fab bottom left>\n\n  <button >\n    <ion-icon name="arrow-back" (click)="voltar()">Voltar</ion-icon>\n    <div  class="label"dir="rtl"></div>\n  </button>\n</ion-fab>\n\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirma-participacao/confirma-participacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]])
    ], ConfirmaParticipacaoComponent);
    return ConfirmaParticipacaoComponent;
}());

//# sourceMappingURL=confirma-participacao.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        this.url = './assets/mocks/';
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.get = function (path) {
        return this.http.get(this.url + path);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmacao_confirmacao__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginPage = (function () {
    function LoginPage(push, http, userProvider, menuCtrl, navCtrl, translateService, loginService, usuarioService, toastService, events, loadingCtrl) {
        var _this = this;
        this.push = push;
        this.http = http;
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.usuarioService = usuarioService;
        this.toastService = toastService;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* Usuario */]();
        this.cadastro = false;
        this.opt = 'signin';
        this.menuCtrl.enable(false);
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        // this.push.hasPermission().then();
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                // this.toastService.toast('Possui Permissão!!!');
                var options = {
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
                var pushObject = _this.push.init(options);
                pushObject.on('notification').subscribe(function (notification) {
                    alert(notification.message);
                });
                pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
                pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
            }
            // } else {
            //   this.toastService.toast('NÃO possui permissão!!!');
            // }
        });
    }
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    LoginPage.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ;
    LoginPage.prototype.maxDataNasc = function () {
        var max = new Date();
        max.setFullYear(max.getFullYear() - 18);
        return max;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.loginService.login(this.usuario.username, this.usuario.password)
            .subscribe(function (dados) {
            _this.sleep(1000).then(function () {
                _this.usuarioService.atualizaPosicao();
                _this.toastService.toast("Bem Vindo " + _this.usuario.username);
                loading.dismiss();
                if (_this.loginService.getUsuarioLogado().email_verified_at == null) {
                    _this.goToConfirmacao();
                }
                else {
                    _this.events.publish('user:loggedin');
                    _this.goToListaEventos();
                }
            });
        }, function (error) {
            switch (error.status) {
                case 0:
                    _this.toastService.toast("O Servidor remoto recusou a conexão, tente novamente mais tarde");
                    break;
                case 401:
                    _this.toastService.toast("Credenciais inválidas");
                    _this.usuario.username = '';
                    _this.usuario.password = '';
                    _this.loginService.clearCredenciais();
                    break;
                default:
                    _this.toastService.toast("Ocorreu um erro na sua tentativa de login");
                    // this.toastService.toast(JSON.stringify(error));
                    _this.errosss = JSON.stringify(error);
            }
            loading.dismiss();
            console.log(error.statusCode);
            console.log(JSON.stringify(error));
        }, function () { return loading.dismiss(); });
    };
    LoginPage.prototype.cadastrar = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        this.loginService.cadastrar(this.usuario)
            .subscribe(function (x) {
            // console.log("Deu Certo " + JSON.stringify(this.usuario));
            loading.dismiss();
            _this.login();
        }, function (error) {
            console.log(error);
            var erros = error.error;
            if (Array.isArray(erros)) {
                var erro = "";
                for (var i = 0; i < erros.length; i++) {
                    erro += (erros[i]) + "\n";
                }
                _this.toastService.toast(erro);
            }
            else {
                _this.toastService.toast(erros);
            }
            loading.dismiss();
        }, function () { return loading.dismiss(); });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.loginService.estaLogado()) {
            var credenciais = this.loginService.getCredenciais().then(function (dados) {
                if (dados != null) {
                    var cred = JSON.parse(dados);
                    _this.usuario.username = cred.login;
                    _this.usuario.password = cred.senha;
                    _this.login();
                }
            });
        }
        else {
            console.log("Esta logado");
            if (this.loginService.getUsuarioLogado().email_verified_at != undefined)
                this.goToListaEventos();
            else
                this.goToConfirmacao();
        }
    };
    LoginPage.prototype.goToListaEventos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__["a" /* EventosComponent */]);
        // console.log('Vai pra página de eventos');
    };
    LoginPage.prototype.goToConfirmacao = function () {
        // console.log('Vai pra página de confirmacao');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/`<!--<ion-header>\n\n<ion-navbar>\n<ion-title>Temo Chat Theme fo Ionic</ion-title>\n</ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content>\n  <ion-row style="background-color: white;" padding>\n    <ion-col s12>\n      <div [hidden]="cadastro" id="logo" text-center>\n        <img src="./assets/img/jogaJuntoLogo.png" width="80%">\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div padding>\n    <ion-segment [(ngModel)]="opt" color="light">\n      <ion-segment-button value="signin" (click)="cadastro = false">\n        {{ \'LOGIN\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="signup" (click)="cadastro = true">\n        {{ \'SIGNUP\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="opt" padding>\n    <form *ngSwitchCase="\'signin\'">\n\n      <ion-input type="text" [(ngModel)]="usuario.username" placeholder="{{\'Username\' | translate}}" name="username"></ion-input>\n\n      <ion-input type="password" [(ngModel)]="usuario.password" placeholder="{{\'Password\' | translate}}" name="password"></ion-input>\n\n\n      <div padding text-center>\n        <button ion-button round color="light" icon-right (click)="login()">\n          {{ \'LOGIN\' | translate }} <ion-icon name="log-in"></ion-icon>\n        </button>\n\n      </div>\n\n\n    </form>\n\n    <form  *ngSwitchCase="\'signup\'" padding>\n      <ion-item>\n        <ion-label stacked>{{ \'Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.nome" name="nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Lastname\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.sobrenome" name="sobrenome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n        <ion-input type="text"  [(ngModel)]="usuario.username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password"  [(ngModel)]="usuario.password" name="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Retry Password\' | translate }}</ion-label>\n        <ion-input type="password"  [(ngModel)]="usuario.repassword" name="repassword"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'Date of birth\' | translate }}</ion-label>\n        <ion-datetime pickerFormat="DD MMMM YYYY" displayFormat="DD MMMM YYYY"\n        placeholder="{{\'Select Date\' | translate}}" max="{{ maxDataNasc() | date:\'yyyy-MM-dd\' }}"\n        name="dataNascimento" [(ngModel)]="usuario.dataNascimento"></ion-datetime>\n      </ion-item>\n\n      <div padding text-center>\n        <button ion-button round color="light" icon-right (click)="cadastrar()">\n          {{ \'SIGNUP\' | translate }} <ion-icon name="person-add"></ion-icon>\n        </button>\n      </div>\n    </form>\n\n\n  </div>\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/
        })
        /**
        * @author: KMR
        * @email: yajuve.25.dz@gmail.com
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-room/chat-room.module": [
		727,
		0
	],
	"../pages/list-friends/list-friends.module": [
		728,
		3
	],
	"../pages/login/login.module": [
		729,
		4
	],
	"../pages/my-profile/my-profile.module": [
		730,
		2
	],
	"../pages/profile-friend/profile-friend.module": [
		731,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
        this.dataNascimento = new Date();
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarEventoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_esporte_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_evento__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_local__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_util__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_contacts__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CriarEventoComponent = (function () {
    function CriarEventoComponent(esporteService, eventoService, viewCtrl, navParams, toastService, loadingCtrl, localService, contacts) {
        this.esporteService = esporteService;
        this.eventoService = eventoService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.localService = localService;
        this.contacts = contacts;
        this.Util = __WEBPACK_IMPORTED_MODULE_8__providers_util_util__["a" /* Util */];
        this.evento = new __WEBPACK_IMPORTED_MODULE_4__models_evento__["a" /* Evento */]();
        this.temContatos = false;
    }
    CriarEventoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.local = new __WEBPACK_IMPORTED_MODULE_5__models_local__["a" /* Local */]();
        this.local.id = -1;
        this.passo = 1;
        var loading = this.loading();
        loading.present();
        this.esporteService.buscaMeusEsportes().subscribe(function (dados) { return _this.esportes = dados; }, function (erro) {
            console.log(erro);
            _this.toastService.toast("Erro ao buscar os esportes, tente novamente mais tarde!");
            loading.dismiss();
        }, function () { return loading.dismiss(); });
        this.getContatos();
    };
    CriarEventoComponent.prototype.selecionaEsporte = function (esporte) {
        this.evento.esporte = esporte;
        this.evento.local = new __WEBPACK_IMPORTED_MODULE_5__models_local__["a" /* Local */]();
        this.evento.vagas = esporte.qtdMaximo;
        this.avancar();
        this.buscaLocal(esporte);
    };
    CriarEventoComponent.prototype.buscaLocal = function (esporte, nome) {
        var _this = this;
        if (nome === void 0) { nome = null; }
        this.locais = [];
        this.evento.local = new __WEBPACK_IMPORTED_MODULE_5__models_local__["a" /* Local */]();
        this.localService.buscaLocalPorEsporte(esporte, nome).subscribe(function (dados) {
            _this.locais = dados;
        }, function (erro) {
            console.log(erro);
            _this.toastService.toast("Erro ao buscar os locais, tente novamente mais tarde!");
        });
    };
    CriarEventoComponent.prototype.checkContato = function (contato) {
        contato.checked = !contato.checked;
    };
    CriarEventoComponent.prototype.getContatos = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_contacts__["a" /* ContactFindOptions */]();
        options.filter = "";
        options.multiple = true;
        var fields = ['displayName', 'name', 'phoneNumbers', 'emails'];
        this.contacts.find(fields, options).then(function (dados) {
            _this.meusContatos = dados.map(function (x) {
                x.checked = false;
                return x;
            });
            _this.temContatos = true;
            console.log(JSON.stringify(dados[1]));
        });
    };
    CriarEventoComponent.prototype.voltar = function () {
        if (this.passo > 1) {
            this.passo--;
        }
    };
    CriarEventoComponent.prototype.avancar = function () {
        if (this.passo < 4)
            this.passo++;
    };
    CriarEventoComponent.prototype.concluir = function () {
        //Lista de convidados do celular
        // let convidados = this.meusContatos.filter(x => x.checked);
        var _this = this;
        //LISTA PARA TESTES EM BROWSER
        var convidados = "[{\"_objectInstance\":{\"id\":\"3\",\"rawId\":\"1\",\"displayName\":\"Daniel\",\"name\":{\"givenName\":\"Daniel\",\"formatted\":\"Daniel \"},\"nickname\":null,\"phoneNumbers\":[{\"id\":\"5\",\"pref\":false,\"value\":\"41 9774-3774\",\"type\":\"mobile\"}],\"emails\":null,\"addresses\":null,\"ims\":null,\"organizations\":null,\"birthday\":null,\"note\":null,\"photos\":null,\"categories\":null,\"urls\":null},\"checked\":true},{\"_objectInstance\":{\"id\":\"4\",\"rawId\":\"6\",\"displayName\":\"Tia Keyla\",\"name\":{\"familyName\":\"Keyla\",\"givenName\":\"Tia\",\"formatted\":\"Tia Keyla\"},\"nickname\":null,\"phoneNumbers\":[{\"id\":\"30\",\"pref\":false,\"value\":\"+55 41 9620-2901\",\"type\":\"mobile\"}],\"emails\":null,\"addresses\":null,\"ims\":null,\"organizations\":null,\"birthday\":null,\"note\":null,\"photos\":null,\"categories\":null,\"urls\":null},\"checked\":true},{\"_objectInstance\":{\"id\":\"7\",\"rawId\":\"23\",\"displayName\":\"Caroline\",\"name\":{\"givenName\":\"Caroline\",\"formatted\":\"Caroline \"},\"nickname\":null,\"phoneNumbers\":[{\"id\":\"115\",\"pref\":false,\"value\":\"+55 45 9842-1001\",\"type\":\"mobile\"}],\"emails\":null,\"addresses\":null,\"ims\":null,\"organizations\":null,\"birthday\":null,\"note\":null,\"photos\":null,\"categories\":null,\"urls\":null},\"checked\":true}]";
        convidados = JSON.parse(convidados);
        var loading = this.loading();
        loading.present();
        this.eventoService.criarEvento(this.evento, convidados).subscribe(function (dados) {
            loading.dismiss();
            console.log(dados);
            _this.toastService.toast("Evento criado com sucesso!");
            _this.viewCtrl.dismiss();
        }, function (erro) {
            loading.dismiss();
            console.log(erro);
            _this.toastService.toast("Erro ao criar o evento: " + erro);
        });
        // console.log(JSON.stringify(this.evento));
    };
    CriarEventoComponent.prototype.podeAvancar = function () {
        switch (this.passo) {
            case 1:
                return !(this.evento.esporte.id == null);
            case 2:
                return !(this.evento.local.id == 0);
            case 3:
                return !(this.evento.dataRealizacao == null || this.evento.horario == null || this.evento.descricao.length == 0);
            // break;
            case 4:
                return true;
        }
        return false;
    };
    CriarEventoComponent.prototype.filtraLocal = function () {
        console.log("Filtrando o local");
        this.buscaLocal(this.evento.esporte, this.search);
    };
    CriarEventoComponent.prototype.maxData = function () {
        var max = new Date();
        max.setFullYear(max.getFullYear() + 1);
        return max;
    };
    CriarEventoComponent.prototype.minData = function () {
        return new Date();
    };
    CriarEventoComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    CriarEventoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'criar-evento',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/criar-evento/criar-evento.html"*/`<!-- Generated template for the EventoComponent component -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()"></button>\n    </ion-buttons>\n\n    <ion-title>\n      Criar Evento\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="passo" name="passo">\n    <ion-segment-button value="1">\n      Esporte\n    </ion-segment-button>\n    <ion-segment-button value="2">\n      Dados\n    </ion-segment-button>\n    <ion-segment-button [disabled]="podeAvancar()" value="3">\n      Local\n    </ion-segment-button>\n    <ion-segment-button [disabled]="!podeAvancar()" value="4">\n      Convidados\n    </ion-segment-button>\n  </ion-segment>\n\n<ion-list [ngSwitch]="passo">\n  <ion-list *ngSwitchCase="1">\n    <div class="helper"> Selecione um esporte </div>\n    <ion-item *ngFor="let esporte of esportes" >\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <ion-thumbnail item-start>\n              <img [src]="Util.pathAvatar(\'avatar5.jpg\')" style="padding: 5px">\n            </ion-thumbnail>\n          </ion-col>\n          <ion-col col-4>\n            <h2>{{esporte.nome}}</h2>\n          </ion-col>\n          <ion-col col-4>\n            <button button (click)="selecionaEsporte(esporte)">\n              <ion-icon name="checkmark-circle">\n              </ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="2">\n      <div class="helper"> Escolha (ou crie) um local </div>\n      <div [hidden]="evento.local.id != -1">\n        <ion-item>\n          <ion-label stacked>{{ \'Name\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="local.nome" name="nomeLocal"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'address\' | translate }}</ion-label>\n          <ion-input type="text" [(ngModel)]="local.endereco.logradouro" name="enderecoLocal"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Bairro</ion-label>\n          <ion-input type="text" [(ngModel)]="local.endereco.bairro" name="bairroLocal"></ion-input>\n        </ion-item>\n      </div>\n\n      <ion-list radio-group [(ngModel)]="evento.local" name="evento.local">\n\n        <ion-item>\n          <ion-label stacked>{{ \'SEARCH_TITLE\' | translate }}</ion-label>\n          <ion-input type="text" (ionChange)="filtraLocal()" [(ngModel)]="search"  name="searchLocal"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label>Criar um novo</ion-label>\n          <ion-radio [value]="local"></ion-radio>\n        </ion-item>\n\n        <ion-item *ngFor="let l of locais">\n          <ion-label>{{l.nome}} / {{l.endereco.bairro}}</ion-label>\n          <ion-radio [value]="l"></ion-radio>\n        </ion-item>\n\n      </ion-list>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="3">\n      <div class="helper"> Preencha os dados do Evento </div>\n      <ion-item>\n        <ion-label stacked>Descrição do Evento</ion-label>\n        <ion-textarea placeholder=""\n        [(ngModel)]="evento.descricao" name="descricao"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Data</ion-label>\n        <ion-datetime pickerFormat="DD MMMM YYYY" displayFormat="DD MMMM YYYY"\n        placeholder="{{\'Select Date\' | translate}}"\n        min="{{ minData() | date:\'yyyy-MM-dd\' }}" max="{{ maxData() | date:\'yyyy-MM-dd\' }}"\n        name="eventoData" [(ngModel)]="evento.dataRealizacao"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Horario</ion-label>\n        <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm"\n        placeholder="Selecione o horário" name="horario" [(ngModel)]="evento.horario"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Evento publico</ion-label>\n        <ion-checkbox color="dark" name="eventopublico" [(ngModel)]="evento.publico"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Vagas</ion-label>\n        <ion-input type="number" step="1" max="evento.esporte.qtdMaximo" [(ngModel)]="evento.vagas" name="eventoVagas"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Valor total do evento</ion-label>\n        <ion-input type="number" step="0.01" [(ngModel)]="evento.valor" name="eventoValor"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="4">\n\n      <ion-list *ngIf="temContatos">\n        <div class="helper">  Escolha quais amigos convidar </div>\n\n        <ion-item *ngFor="let contato of meusContatos">\n          <ion-col col-4>{{contato.displayName}}</ion-col>\n          <ion-col col-4>\n            <button (click)="checkContato(contato)">\n              <ion-icon name="checkmark-circle" *ngIf="!contato.checked"></ion-icon>\n              <ion-icon name="close-circle" *ngIf="contato.checked"></ion-icon>\n\n            </button>\n          </ion-col>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n  </ion-list>\n\n\n\n  <ion-fab bottom left>\n\n    <button ion-fab [disabled]="passo == 1" (click)="voltar()">\n      <ion-icon name="arrow-dropleft-circle"></ion-icon>\n      <div  class="label"dir="rtl"></div>\n    </button>\n\n\n  </ion-fab>\n\n  <ion-fab bottom right>\n\n    <button ion-fab *ngIf="passo != 4" (click)="avancar()" [disabled]="!podeAvancar()">\n      <ion-icon name="arrow-dropright-circle"></ion-icon>\n      <div class="label"></div>\n    </button>\n\n    <button ion-fab *ngIf="passo == 4" (click)="concluir()" [disabled]="!podeAvancar()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      <div  class="label"dir="rtl"></div>\n    </button>\n\n\n  </ion-fab>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/criar-evento/criar-evento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_esporte_service__["a" /* EsporteService */],
            __WEBPACK_IMPORTED_MODULE_1__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_service__["a" /* LocalService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_contacts__["b" /* Contacts */]])
    ], CriarEventoComponent);
    return CriarEventoComponent;
}());

//# sourceMappingURL=criar-evento.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalService = (function () {
    function LocalService(http, login) {
        this.http = http;
        this.login = login;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
    }
    LocalService.prototype.buscaLocalPorEsporte = function (esporte, nome) {
        if (nome != null)
            nome = '?nome=' + nome;
        else
            nome = '';
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/local/esporte/" + esporte.id + nome, { headers: this.headers });
    };
    LocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], LocalService);
    return LocalService;
}());

//# sourceMappingURL=local.service.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Local; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endereco__ = __webpack_require__(87);

var Local = (function () {
    function Local() {
        this.id = 0;
        this.endereco = new __WEBPACK_IMPORTED_MODULE_0__endereco__["a" /* Endereco */]();
    }
    return Local;
}());

//# sourceMappingURL=local.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventos_eventos__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConfirmacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConfirmacaoComponent = (function () {
    function ConfirmacaoComponent(login, toast, navCtrl) {
        this.login = login;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.texto1 = '';
        this.texto2 = '';
        console.log('Hello ConfirmacaoComponent Component');
    }
    ConfirmacaoComponent.prototype.confirmar = function () {
        var _this = this;
        var codigo = this.texto1.toUpperCase() + "-" + this.texto2.toUpperCase();
        this.login.confirmar(codigo).subscribe(function (dados) {
            _this.toast.toast("Seu email foi confirmado, e sua conta ativada!");
            _this.login.ativar();
            _this.goToListaEventos();
        }, function (error) {
            console.log(error);
            _this.toast.toast("Seu código não foi aceito, verifique e tente novamente");
        });
    };
    ConfirmacaoComponent.prototype.verificar = function () {
        console.log("Enviando para a pagina de login");
        this.login.logout();
        this.navCtrl.pop();
    };
    ConfirmacaoComponent.prototype.reenviar = function () {
        var _this = this;
        this.login.reenviar().subscribe(function () { return _this.toast.toast("Email enviado, verifique sua caixa de entrada"); }, function () { return _this.toast.toast("Houve algum erro ao enviar o email, tente novamente"); });
        // toast.
    };
    ConfirmacaoComponent.prototype.goToListaEventos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventos_eventos__["a" /* EventosComponent */]);
        console.log('Vai pra página de eventos');
    };
    ConfirmacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'confirmacao',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirmacao/confirmacao.html"*/`<!--\nGenerated template for the ListFriendsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ativação de Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h2 stacked>{{ \'Activation Code\' | translate }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-5>\n        <ion-input text-uppercase maxlength="4" type="text" [(ngModel)]="texto1"></ion-input>\n      </ion-col>\n      <ion-col col-2>\n        <h2>-</h2>\n      </ion-col>\n      <ion-col col-5>\n        <ion-input text-uppercase maxlength="4" type="text" [(ngModel)]="texto2"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block round color="light" icon-right\n        (click)="confirmar()"\n        [disabled]="!(texto1.length==4 && texto2.length==4)" >\n          {{ \'Activate\' | translate }} <ion-icon name="done-all"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block round color="light" icon-right (click)="reenviar()">\n          {{ \'Resend\' | translate }} <ion-icon name="paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block round color="light" icon-right\n        (click)="verificar()" >\n          Já confirmei! <ion-icon name="done-all"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirmacao/confirmacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], ConfirmacaoComponent);
    return ConfirmacaoComponent;
}());

//# sourceMappingURL=confirmacao.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LOGGEDIN = 'loggedUser';
var CREDENCIAIS = 'credentialsUser';
var LoginService = (function () {
    function LoginService(injector, http, storage) {
        this.injector = injector;
        this.http = http;
        this.storage = storage;
    }
    LoginService.prototype.today = function () {
        return new Date();
    };
    LoginService.prototype.clearCredenciais = function () {
        this.storage.remove(CREDENCIAIS);
    };
    LoginService.prototype.setCredenciais = function (login, senha) {
        var credenciais = { login: login, senha: senha };
        this.storage.set(CREDENCIAIS, JSON.stringify(credenciais));
    };
    LoginService.prototype.getCredenciais = function () {
        var credenciais = null;
        return this.storage.get(CREDENCIAIS);
    };
    LoginService.prototype.estaLogado = function () {
        return (this.getUsuarioLogado() !== undefined && this.getUsuarioLogado() !== null);
    };
    LoginService.prototype.getUsuarioLogado = function () {
        var _this = this;
        this.storage.get(LOGGEDIN)
            .then(function (user) {
            _this.usuario = JSON.parse(user);
            var agora = Date.now() / 1000;
            if (_this.usuario === null || agora >= _this.usuario.exp) {
                _this.logout(false);
            }
        }).catch(function (erro) {
            console.log(erro);
            _this.logout(false);
        });
        return this.usuario;
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/auth/login", body, { headers: headers }).do(function (user) {
            var data = user.token.toString().split('.');
            var userTemp = JSON.parse(atob(data[1]));
            _this.usuario = userTemp;
            _this.usuario.token = user.token.toString();
            _this.storage.set(LOGGEDIN, JSON.stringify(_this.usuario)).then().catch(function (error) { return console.log("NAO GRAVOU"); });
            _this.setCredenciais(username, password);
        });
    };
    LoginService.prototype.cadastrar = function (usuario) {
        // let headers = new HttpHeaders();
        // headers = headers.append('Content-type', 'application/json');
        this.setCredenciais(usuario.username, usuario.password);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario", { usuario: usuario });
    };
    LoginService.prototype.ativar = function () {
        var _this = this;
        this.storage.get(LOGGEDIN).then(function (user) {
            _this.usuario = JSON.parse(user);
        });
        this.usuario.email_verified_at = new Date();
        this.storage.set(LOGGEDIN, JSON.stringify(this.usuario));
    };
    LoginService.prototype.confirmar = function (codigo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/confirmar/" + this.getUsuarioLogado().id + "/" + codigo, { headers: headers });
    };
    LoginService.prototype.reenviar = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/reenviar/", { headers: headers });
    };
    LoginService.prototype.logout = function (removeCredenciais) {
        if (removeCredenciais === void 0) { removeCredenciais = false; }
        this.storage.remove(LOGGEDIN).then(function () { return console.log("Deslogado!"); });
        if (removeCredenciais)
            this.storage.remove(CREDENCIAIS);
        this.usuario = null;
        // const navCtrl = this.injector.get(NavController)
        // navCtrl.setRoot('LoginPage');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.toast = function (mensagem) {
        this.mensagem = mensagem;
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ToastService.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: this.mensagem,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endereco__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cidade_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_esporte_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventos_eventos__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import {NavController, NavParams, , AlertController} from "ionic-angular";
/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PerfilComponent = (function () {
    function PerfilComponent(navCtrl, viewCtrl, usuarioService, cidadeService, esporteService, toastService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.usuarioService = usuarioService;
        this.cidadeService = cidadeService;
        this.esporteService = esporteService;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.aba = 'dados';
        this.cidade = { id: 1, name: 'Tokai' };
        this.cidades = [];
        this.esportes = [];
        this.esportesUsuario = [];
        this.Util = __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* Util */];
    }
    PerfilComponent.prototype.cidadeChange = function (event) {
        this.usuario.endereco.cidade.id = event.value['id'];
        // console.log('idcidade:', event.value);
    };
    PerfilComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent.prototype.buscaCidades = function () {
        var _this = this;
        this.cidadeService.buscaTodasCidades().subscribe(function (dados) {
            var data = dados.data;
            _this.cidades = data.map(function (x) {
                return { 'id': x.id, 'name': x.nome };
            });
            //this.cidade = this.cidades.filter(x => x.id == this.usuario.endereco.cidade.id)[0];
            if (_this.usuario.endereco != null && _this.usuario.endereco.cidade != null)
                _this.cidade = { 'id': _this.usuario.endereco.cidade.id, 'name': _this.usuario.endereco.cidade.nome };
        }, function (erro) {
            console.log(erro);
        });
    };
    PerfilComponent.prototype.filtraEsportePorId = function (id) {
        if (this.usuario.posicoes.map(function (x) { return x.esporte_id; }).indexOf(id) >= 0)
            return true;
        else
            return false;
    };
    PerfilComponent.prototype.buscaEsportes = function () {
        var _this = this;
        this.esporteService.buscaTodasEsportes().subscribe(function (dados) {
            _this.esportes = dados.data;
            _this.esportesUsuario = _this.esportes.filter(function (value) { return _this.filtraEsportePorId(value.id); });
            _this.esportes = _this.esportes.filter(function (value) { return !_this.filtraEsportePorId(value.id); });
        });
    };
    PerfilComponent.prototype.adicionaEsporte = function (esporte) {
        console.log(this.esportes);
        this.esportes = this.esportes.filter(function (x) { return x.id != esporte.id; });
        console.log(this.esportes);
        this.esportesUsuario.push(esporte);
    };
    PerfilComponent.prototype.atualizaPosicoes = function (event, idEsporte) {
        // console.log(idEsporte);
        console.log(this.usuario.posicoes);
        // let idEsporte = event[0].esporte_id;
        this.usuario.posicoes = this.usuario.posicoes.filter(function (x) { return x.esporte_id != idEsporte; });
        for (var i = 0; i < event.length; i++) {
            this.usuario.posicoes.push(event[i]);
        }
        console.log(this.usuario.posicoes);
    };
    PerfilComponent.prototype.possuiPosicao = function (posicao) {
        // console.log(posicao + ' - ' + (this.usuario.posicoes.map(x => x.id).indexOf(posicao) >= 0));
        return (this.usuario.posicoes.map(function (x) { return x.id; }).indexOf(posicao) >= 0);
    };
    PerfilComponent.prototype.salvar = function () {
        var _this = this;
        console.log(JSON.stringify(this.usuario));
        var loading = this.loading();
        loading.present();
        this.usuarioService.salvarUsuario(this.usuario).subscribe(function (dados) {
            _this.toastService.toast("Dados salvos com sucesso!");
            loading.dismiss();
        }, function (erro) {
            _this.toastService.toast("Erro ao salvar os dados");
            console.log(erro);
            loading.dismiss();
        });
    };
    PerfilComponent.prototype.buscaCep = function () {
        var _this = this;
        this.usuarioService.buscarCep(this.usuario.endereco.cep).subscribe(function (dados) {
            _this.usuario.endereco.logradouro = dados.logradouro;
            _this.usuario.endereco.bairro = dados.bairro;
            _this.cidadeService.buscaPorIbge(dados.ibge).subscribe(function (dados) {
                console.log(dados);
                _this.usuario.endereco.cidade = dados;
                _this.cidade.id = dados.id;
                _this.cidade.name = dados.nome;
            }, function (erro) { return console.log(erro); });
        }, function (erro) {
            _this.toastService.toast("Não localizamos o cep informado!");
        });
    };
    PerfilComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.usuarioService.carregaUsuario().subscribe(function (response) {
                // console.log(response);
                _this.usuario = response;
                if (_this.usuario.endereco == null) {
                    _this.usuario.endereco = new __WEBPACK_IMPORTED_MODULE_1__models_endereco__["a" /* Endereco */]();
                }
                _this.buscaCidades();
                _this.buscaEsportes();
                loading.dismiss();
                resolve(response);
            }, function (error) {
                console.log("Erro ao Carregar Evento: " + error);
                loading.dismiss();
            });
        });
    };
    PerfilComponent.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__eventos_eventos__["a" /* EventosComponent */]);
        // this.viewCtrl.dismiss().then()
    };
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'perfil',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/perfil/perfil.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Meu Perfil</ion-title>\n    <ion-buttons left>\n    <button ion-button icon-only (click)="voltar()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n\n    </ion-buttons>\n    <ion-buttons end>\n      <button (click)="salvar()" ion-button icon-only >\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content padding-top *ngIf="!isLoading">\n  <form >\n    <div padding>\n      <ion-segment [(ngModel)]="aba" name="abas">\n        <ion-segment-button value="dados">\n          {{\'Data\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="endereco">\n          {{\'Address\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="esporte">\n          {{\'Sport\' | translate}}\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="aba">\n      <ion-list *ngSwitchCase="\'dados\'">\n\n        <div text-center style="background-color: white">\n\n          <ion-avatar>\n            <img id="my-avatar" [src]="Util.pathAvatar(\'usuario.imagem\')">\n          </ion-avatar>\n          <ion-item-divider  text-center>\n            <!-- <ion-icon name="information-circle"></ion-icon> -->\n            <div color="secondary">\n              <h1>{{usuario.nome}} {{usuario.sobrenome}}</h1>\n            </div>\n            <div *ngIf="usuario.endereco !== null" color="secondary">\n              <h3>{{usuario.endereco.cidade.nome}}/{{usuario.endereco.cidade.estado.sigla}}</h3>\n            </div>\n          </ion-item-divider>\n        </div>\n\n\n        <ion-item-divider color="light" text-center>\n          <h1>{{\'About me\' | translate}}</h1>\n          <ion-item>\n            <ion-textarea placeholder="Fale um pouco sobre você."\n            [(ngModel)]="usuario.mensagem" name="mensagem"></ion-textarea>\n          </ion-item>\n        </ion-item-divider >\n\n        <ion-item>\n          <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n          <ion-input text-center type="text" [(ngModel)]="usuario.nome" name="username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{ \'Fullname\' | translate }}</ion-label>\n          <ion-input text-center type="text" [(ngModel)]="usuario.sobrenome" name="fullname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n          <ion-input text-center type="email" [(ngModel)]="usuario.email"  name="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{ \'PHONE\' | translate }}</ion-label>\n          <ion-input text-center type="text" [(ngModel)]="usuario.telefone"  name="telefone"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'endereco\'">\n        <ion-item-divider color="light" text-center>\n          <h1>{{\'Address\' | translate}}</h1>\n        </ion-item-divider >\n\n        <ion-item>\n          <ion-label stacked>CEP: </ion-label>\n          <ion-input text-center type="text" [(ngModel)]="usuario.endereco.cep" name="cep" (blur)="buscaCep()"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>{{ \'address\' | translate }}</ion-label>\n          <ion-input text-center type="email" [(ngModel)]="usuario.endereco.logradouro"  name="logradouro"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Number\' | translate }}</ion-label>\n          <ion-input text-center type="email" [(ngModel)]="usuario.endereco.numero"  name="numero"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Neighborhood\' | translate }}</ion-label>\n          <ion-input text-center type="email" [(ngModel)]="usuario.endereco.bairro"  name="bairro"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Complement\' | translate }}</ion-label>\n          <ion-input text-center type="email" [(ngModel)]="usuario.endereco.complemento"  name="complemento"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item>\n          <ion-label stacked>{{\'City\' | translate}}</ion-label>\n          <ionic-selectable\n          name="cidade"\n          item-content\n          [(ngModel)]="cidade"\n          [items]="cidades"\n          itemValueField="id"\n          itemTextField="name"\n          [canSearch]="true"\n          (onChange)="cidadeChange($event)">\n        </ionic-selectable>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'esporte\'">\n\n      <ion-item-divider color="light" text-center>\n        <h1>{{\'My Sports\' | translate}}</h1>\n      </ion-item-divider >\n\n      <ion-list>\n        <ion-item *ngFor="let esporte of esportesUsuario; let i= index">\n          <ion-label>{{esporte.nome}}</ion-label>\n          <ion-select multiple="true" (ionChange)="atualizaPosicoes($event,esporte.id)"\n          cancelText="Voltar" okText="Ok!" name="posicoesSelecionadas">\n          <ion-option *ngFor="let p of esporte.posicoes" [value]="p"\n          [selected]="possuiPosicao(p.id)">{{p.nome}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-item *ngFor="let esporte of esportes; let i= index">\n        <ion-label>{{esporte.nome}}</ion-label>\n        <ion-select multiple="true" (ionChange)="atualizaPosicoes($event,esporte.id)"\n        cancelText="Voltar" okText="Ok!" name="posicoesSelecionadas">\n        <ion-option *ngFor="let p of esporte.posicoes" [value]="p"\n        [selected]="possuiPosicao(p.id)">{{p.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-item>\n\n  <ion-item>\n    <ion-label><ion-icon name="add-circle"></ion-icon>{{\'Add\' | translate}}</ion-label>\n    <ion-select placeholder="Selecione" (ionChange)="adicionaEsporte($event)" >\n      <ion-option *ngFor="let esporte of esportes" [value]="esporte">{{esporte.nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n</ion-list>\n</div>\n\n<div padding text text-center>\n  <button ion-button color="primary" icon-right (click)="salvar()">\n    {{ \'Save\' | translate }} <ion-icon name="checkmark"></ion-icon>\n  </button>\n</div>\n</form>\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/perfil/perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_3__services_cidade_service__["a" /* CidadeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_esporte_service__["a" /* EsporteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* LoadingController */]])
    ], PerfilComponent);
    return PerfilComponent;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LogoutComponent = (function () {
    function LogoutComponent(events, navCtrl, translateService, loginService, toastService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.toastService = toastService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.events.publish('user:loggedout');
        this.loginService.logout(true);
        this.goToLogin();
    };
    LogoutComponent.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'logout',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/logout/logout.html"*/`<!-- Generated template for the LogoutComponent component -->\n<div>\n  Obrigado por utilizar o JogaJunto!!!\n</div>\n\n<button (click)="goToLogin()">Acessar novamente </button>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/logout/logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
var Friend = (function () {
    function Friend() {
        this.username = '';
        this.fullname = '';
        this.avatar = '';
        this.email = '';
    }
    return Friend;
}());

var User = (function () {
    function User() {
        this.username = '';
        this.password = '';
        this.fullname = '';
        this.avatar = '';
        this.email = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageMocks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageMocks = (function () {
    function MessageMocks() {
        this.items = [];
        var items = [
            {
                "from": "me",
                "to": "krod",
                "content": "Hello",
                "time": new Date()
            },
            {
                "from": "krod",
                "to": "me",
                "content": "Hi how are you ?",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "krod",
                "content": "Fine",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "krod",
                "content": "And you ?",
                "time": new Date()
            },
            {
                "from": "krod",
                "to": "me",
                "content": "Good",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "woods",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "kay",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "JTS",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "harodez",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "eam",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "paden",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "woods",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(item);
        }
    }
    MessageMocks.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    MessageMocks.prototype.add = function (item) {
        this.items.push(item);
    };
    MessageMocks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageMocks);
    return MessageMocks;
}());

//# sourceMappingURL=messageMocks.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_selectable__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_messageMocks__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_util_util__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_input_mask__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_confirma_participacao_confirma_participacao__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_login_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_toast_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_cidade_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_esporte_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_local_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_push__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_eventos_eventos__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_confirmacao_confirmacao__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_usuario_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_evento_evento__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_perfil_perfil__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_logout_logout__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_maps_maps__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_criar_evento_criar_evento__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_contacts__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic3_star_rating__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_perfil_perfil__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_maps_maps__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_criar_evento_criar_evento__["a" /* CriarEventoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_confirma_participacao_confirma_participacao__["a" /* ConfirmaParticipacaoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_25__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_perfil_perfil__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_maps_maps__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_criar_evento_criar_evento__["a" /* CriarEventoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_confirma_participacao_confirma_participacao__["a" /* ConfirmaParticipacaoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_35_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-friends/list-friends.module#ListFriendsPageModule', name: 'ListFriendsPage', segment: 'list-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-friend/profile-friend.module#ProfileFriendPageModule', name: 'ProfileFriendPage', segment: 'profile-friend', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ionic_input_mask__["a" /* InputMaskModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_perfil_perfil__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_logout_logout__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_maps_maps__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_criar_evento_criar_evento__["a" /* CriarEventoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_confirma_participacao_confirma_participacao__["a" /* ConfirmaParticipacaoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_messageMocks__["a" /* MessageMocks */],
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_util_util__["a" /* Util */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_20__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_27__services_evento_service__["a" /* EventoService */],
                __WEBPACK_IMPORTED_MODULE_28__services_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_21__services_cidade_service__["a" /* CidadeService */],
                __WEBPACK_IMPORTED_MODULE_22__services_esporte_service__["a" /* EsporteService */],
                __WEBPACK_IMPORTED_MODULE_23__services_local_service__["a" /* LocalService */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_contacts__["b" /* Contacts */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evento; });
/* unused harmony export UsuarioEvento */
/* unused harmony export Avaliacao */
/* unused harmony export EventoSituacao */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__local__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esporte__ = __webpack_require__(437);


var Evento = (function () {
    function Evento() {
        this.esporte = new __WEBPACK_IMPORTED_MODULE_1__esporte__["a" /* Esporte */]();
        this.local = new __WEBPACK_IMPORTED_MODULE_0__local__["a" /* Local */]();
        this.descricao = '';
    }
    return Evento;
}());
var UsuarioEvento = (function () {
    function UsuarioEvento() {
    }
    return UsuarioEvento;
}());
var Avaliacao = (function () {
    function Avaliacao() {
    }
    return Avaliacao;
}());
var EventoSituacao;
(function (EventoSituacao) {
    EventoSituacao[EventoSituacao["PENDENTE"] = 0] = "PENDENTE";
    EventoSituacao[EventoSituacao["CONFIRMADO"] = 1] = "CONFIRMADO";
    EventoSituacao[EventoSituacao["CANCELADO"] = 2] = "CANCELADO";
    EventoSituacao[EventoSituacao["EXCLUIDO"] = 3] = "EXCLUIDO";
    EventoSituacao[EventoSituacao["FALTOU"] = 4] = "FALTOU";
    EventoSituacao[EventoSituacao["COMPARECEU"] = 5] = "COMPARECEU";
    EventoSituacao[EventoSituacao["QUITADO"] = 6] = "QUITADO";
})(EventoSituacao || (EventoSituacao = {}));

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Esporte; });
/* unused harmony export Posicao */
var Esporte = (function () {
    function Esporte() {
    }
    return Esporte;
}());
var Posicao = (function () {
    function Posicao() {
    }
    return Posicao;
}());

//# sourceMappingURL=esporte.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventoService = (function () {
    function EventoService(http, login, storage) {
        this.http = http;
        this.login = login;
        this.storage = storage;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
    }
    EventoService.prototype.evento = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/getEventosUsuario/", { headers: headers }).map(function (x) { return x.data; });
    };
    EventoService.prototype.carregaEvento = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/" + id, { headers: headers }).map(function (x) { return x.data; });
    };
    EventoService.prototype.eventosRegiao = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/getEventosRegiaoUsuario/" + this.login.getUsuarioLogado().latitude + "/" + this.login.getUsuarioLogado().longitude, { headers: headers }).map(function (x) { return x.data; });
    };
    EventoService.prototype.criarEvento = function (evento, convidados) {
        var dados = { evento: evento, convidados: convidados };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/", dados, { headers: this.headers });
    };
    EventoService.prototype.buscaMeusEventosPendentes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/eventosPendentes/", { headers: this.headers })
            .map(function (x) { return x.data; });
    };
    EventoService.prototype.aceitarConvite = function (evento) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/aceitarconvite/" + evento.id + "/", {}, { headers: this.headers });
    };
    EventoService.prototype.recusarConvite = function (evento) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/recusarconvite/" + evento.id + "/", { headers: this.headers });
    };
    EventoService.prototype.cancelarParticipacao = function (id, justificativa) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/cancelarParticipacao/" + id + "/", { justificativa: justificativa }, { headers: this.headers });
    };
    EventoService.prototype.cancelarEvento = function (id, justificativa) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/cancelarevento/" + id + "/", { justificativa: justificativa }, { headers: this.headers });
    };
    EventoService.prototype.aceitarParticipanteEvento = function (id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/aceitarparticipante/" + id + "/", {}, { headers: this.headers });
    };
    EventoService.prototype.recusarParticipanteEvento = function (id, justificativa) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/recusarparticipante/" + id + "/", { justificativa: justificativa }, { headers: this.headers });
    };
    EventoService.prototype.removerParticipanteEvento = function (id, justificativa) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/removerparticipante/" + id + "/", { justificativa: justificativa }, { headers: this.headers });
    };
    EventoService.prototype.solicitarParticipacao = function (id, mensagem) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/meus/solicitarparticipacao/" + id + "/", { mensagem: mensagem }, { headers: this.headers });
    };
    EventoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EventoService);
    return EventoService;
}());

//# sourceMappingURL=evento.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Author : KM.Raouf
  Email : yajuve.25.dz@gmail.com
*/
var Util = (function () {
    function Util() {
        console.log('Hello UtilProvider Provider');
    }
    Util.pathAvatar = function (name) {
        return './assets/avatar/' + name;
    };
    Util.pathImg = function (name) {
        return './assets/img/' + name;
    };
    Util.pathIcon = function (name) {
        return './assets/esportes/' + name;
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
var API = 'http://localhost:8000';
// export const API = 'http://apijogajunto.maickel.site';
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_evento__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_endereco__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__criar_evento_criar_evento__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirma_participacao_confirma_participacao__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EventosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EventosComponent = (function () {
    function EventosComponent(evento, usuarioService, navCtrl, viewCtrl, menuCtrl, loadingCtrl) {
        this.evento = evento;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl.enable(true);
    }
    EventosComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    EventosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evento.evento().subscribe(function (response) {
            _this.listaEventos = response;
            console.log(_this.listaEventos);
        }, function (erro) {
            console.log(erro);
        });
        this.evento.evento().subscribe(function (response) {
            _this.listaEventos = response;
        }, function (erro) {
            console.log(erro);
        });
        this.evento.evento().subscribe(function (response) {
            _this.listaEventos = response;
        }, function (erro) {
            console.log(erro);
        });
    };
    EventosComponent.prototype.carregaEvento = function (idEvento) {
        var param = { id: idEvento };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__evento_evento__["a" /* EventoComponent */], param);
    };
    EventosComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.usuarioService.carregaUsuario().subscribe(function (response) {
                // console.log(response);
                _this.usuario = response;
                if (_this.usuario.endereco == null) {
                    _this.usuario.endereco = new __WEBPACK_IMPORTED_MODULE_4__models_endereco__["a" /* Endereco */]();
                }
                loading.dismiss();
                resolve(response);
            }, function (error) {
                console.log("Erro ao Carregar Usuário: " + error);
                loading.dismiss();
            });
        });
    };
    EventosComponent.prototype.criarNovoEvento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__criar_evento_criar_evento__["a" /* CriarEventoComponent */]);
    };
    EventosComponent.prototype.notificacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__confirma_participacao_confirma_participacao__["a" /* ConfirmaParticipacaoComponent */]);
    };
    EventosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'eventos',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/eventos/eventos.html"*/`<!-- Generated template for the EventosComponent component -->\n\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle style="display: block !important;" color="primary">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title center class="titleicon toolbar-background">\n      <img src="./assets/img/jogaJuntoLogo.png" style="display:inline-block" height="50px" />\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="map-wrapper">\n    <maps #map>\n    </maps>\n  </div>\n\n\n  <ion-fab bottom right>\n    <button ion-fab><ion-icon name="menu"></ion-icon></button>\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="criarNovoEvento()">\n        <ion-icon name="add-circle"></ion-icon>\n        <div class="label"></div>\n      </button>\n\n      <button ion-fab>\n        <ion-icon name="calendar"></ion-icon>\n        <div  class="label"dir="rtl"></div>\n      </button>\n\n      <button ion-fab (click)="notificacoes()">\n        <ion-icon name="notifications"></ion-icon>\n        <div  class="label"dir="rtl"></div>\n      </button>\n\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n\n\n\n\n\n<!-- <ion-content padding>\n<ion-card class="bg-branco" *ngFor="let evento of listaEventos">\n<ion-card-content>\n<ion-card-title>\n{{ evento.evento.descricao }}\n</ion-card-title>\n<ion-row>\n<ion-col>\n<span icon-start clear small>\n<ion-icon name="calendar">{{ evento.evento.dataRealizacao|date:\'dd/MM/yyyy\' }}</ion-icon>\n</span>\n</ion-col>\n<ion-col>\n<span icon-start clear small>\n<ion-icon name="alarm">{{ evento.evento.horario }}</ion-icon>\n</span>\n</ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col align-self-center>\n<button ion-button icon-start clear medium (click)="carregaEvento(evento.evento.id)">\n<ion-icon name="stats"></ion-icon>\n<div>Detalhes</div>\n</button>\n</ion-col>\n</ion-row>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-content> -->\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/eventos/eventos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]])
    ], EventosComponent);
    return EventosComponent;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_usuario__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioService = (function () {
    function UsuarioService(http, geolocation, login) {
        // setInterval(this.atualizaPosicao(), 10000); // 900000 lê a posição a cada 15 minutos
        this.http = http;
        this.geolocation = geolocation;
        this.login = login;
        // getGeoPosicao(){
        //   this.watch.subscribe((data) => {
        //    let lat = data.coords.latitude;
        //    let long = data.coords.longitude;
        //    return data;
        //
        //  });
        // }
        this.watch = this.geolocation.watchPosition();
    }
    UsuarioService.prototype.carregaUsuario = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/" + this.login.getUsuarioLogado().id, { headers: headers }).map(function (x) { return x.data; });
    };
    UsuarioService.prototype.salvarUsuario = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        this.atualizaPosicao();
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/" + this.login.getUsuarioLogado().id, usuario, { headers: headers });
    };
    UsuarioService.prototype.buscarCep = function (cep) {
        var numberPattern = /\d+/g;
        var cepLimpo = cep.match(numberPattern);
        return this.http.get("https://viacep.com.br/ws/" + cepLimpo + "/json/");
    };
    UsuarioService.prototype.atualizaPosicao = function () {
        var _this = this;
        if (this.login.estaLogado()) {
            console.log("Atualizando posição...");
            this.watch.subscribe(function (data) {
                var lat = data.coords.latitude;
                var long = data.coords.longitude;
                var usuario = new __WEBPACK_IMPORTED_MODULE_3__models_usuario__["a" /* Usuario */]();
                usuario.latitude = lat;
                usuario.longitude = long;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                headers = headers.append('Authorization', 'Bearer ' + _this.login.getUsuarioLogado().token);
                var http = _this.http.patch(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/atualizageoposicao/" + _this.login.getUsuarioLogado().id, usuario, { headers: headers });
                http.subscribe();
            });
        }
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_perfil_perfil__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirma_participacao_confirma_participacao__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_logout_logout__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_usuario_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_util_util__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(menuCtrl, userProvider, translate, platform, config, statusBar, splashScreen, events, usuarioService, loginService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.userProvider = userProvider;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.usuarioService = usuarioService;
        this.loginService = loginService;
        this.rootPage = 'LoginPage';
        this.Util = __WEBPACK_IMPORTED_MODULE_13__providers_util_util__["a" /* Util */];
        this.pages = [
            { icon: 'contacts', title: 'Friends', component: 'ListFriendsPage' },
            { icon: 'contact', title: 'My Profile', component: 'MyProfilePage' },
            { icon: 'log-out', title: 'Logout', component: 'LoginPage' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
        events.subscribe('user:loggedin', function () {
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__["a" /* EventosComponent */] },
                { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__components_perfil_perfil__["a" /* PerfilComponent */] },
                { title: 'Convites', component: __WEBPACK_IMPORTED_MODULE_9__components_confirma_participacao_confirma_participacao__["a" /* ConfirmaParticipacaoComponent */] },
                { icon: 'log-out', title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_10__components_logout_logout__["a" /* LogoutComponent */] },
            ];
            _this.menuCtrl.enable(true);
            _this.usuario = loginService.getUsuarioLogado();
            console.log(_this.usuario);
        });
        events.subscribe('user:loggedout', function () {
            _this.pages = [
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */] }
            ];
            _this.menuCtrl.enable(false);
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/app/main.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Joga Junto</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="bg-branco">\n<ion-grid>\n  <!-- Header do Menu - Perfil -->\n  <ion-row *ngIf="usuario != null" class="menu-header">\n    <ion-col>\n        <img id="my-avatar" [src]="Util.pathAvatar(usuario.imagem)" width="30">\n    </ion-col>\n    <ion-col style="vertical-align: center">\n      <h4 ion-text>{{ usuario.nome }}</h4>\n      <p>\n        <ionic3-star-rating \n          activeIcon = "star"\n          defaultIcon = "star-outline"\n          activeColor = "yellow" \n          defaultColor = "#f4f4f4"\n          readonly="true"\n          [rating]="usuario.score">\n        </ionic3-star-rating>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n    \n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage" persistent=“true”></ion-nav>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/app/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_12__services__["a" /* LoginService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_endereco__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_evento_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__evento_evento__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapsComponent = (function () {
    function MapsComponent(geolocation, usuarioService, evento, navCtrl, loadingCtrl) {
        this.geolocation = geolocation;
        this.usuarioService = usuarioService;
        this.evento = evento;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    MapsComponent.prototype.loading = function () {
        return this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
    };
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = this.createMap();
        this.addMapEventListeners();
        this.getCurrentLocation().subscribe(function (location) {
            _this.map.setCenter(location);
        });
        this.evento.eventosRegiao().subscribe(function (response) {
            _this.eventosRegiao = response;
            // console.log(this.eventosRegiao);
            _this.addMarkers(_this.map);
        }, function (erro) {
            console.log("Erro ao buscar eventos na regiao");
            console.log(erro);
        });
    };
    MapsComponent.prototype.createMap = function (location) {
        if (location === void 0) { location = new google.maps.LatLng(40.712784, -74.005942); }
        // console.log('init location ' + location)
        var mapOptions = {
            center: location,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        var mapEl = document.getElementById("map");
        var map = new google.maps.Map(mapEl, mapOptions);
        return map;
    };
    MapsComponent.prototype.centerLocation = function (location) {
        var _this = this;
        if (location) {
            this.map.setCenter(location);
        }
        else {
            this.getCurrentLocation().subscribe(function (currentLocation) {
                _this.map.setCenter(currentLocation);
            });
        }
    };
    MapsComponent.prototype.getCurrentLocation = function () {
        var _this = this;
        var options = { timeout: 10000, enableHighAccuracy: true };
        var locationObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observable) {
            _this.geolocation.getCurrentPosition(options)
                .then(function (resp) {
                var lat = resp.coords.latitude;
                var lng = resp.coords.longitude;
                // console.log('lat '+ lat +' == '+ 'long '+lng )
                var location = new google.maps.LatLng(lat, lng);
                // console.log('current location '+location)
                observable.next(location);
                _this.addMarker(location, _this.map);
            });
        });
        return locationObs;
    };
    MapsComponent.prototype.addMapEventListeners = function () {
        var _this = this;
        google.maps.event.addListener(this.map, 'dragstart', function () {
            _this.isMapIdle = false;
        });
        google.maps.event.addListener(this.map, 'idle', function () {
            _this.isMapIdle = true;
        });
    };
    MapsComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loading();
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.usuarioService.carregaUsuario().subscribe(function (response) {
                // console.log(response);
                _this.usuario = response;
                if (_this.usuario.endereco == null) {
                    _this.usuario.endereco = new __WEBPACK_IMPORTED_MODULE_4__models_endereco__["a" /* Endereco */]();
                }
                // console.log(this.usuario);
                loading.dismiss();
                resolve(response);
            }, function (error) {
                console.log("Erro ao Carregar Usuário: " + error);
                loading.dismiss();
            });
        });
    };
    MapsComponent.prototype.addMarker = function (pos, map) {
        // console.log("Add Custom Marker")
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: pos,
            icon: __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* Util */].pathIcon('male-2.png')
        });
    };
    MapsComponent.prototype.addMarkers = function (map) {
        var bounds = new google.maps.LatLngBounds();
        var markers = [];
        var marker;
        var self = this;
        for (var i = 0; i < this.eventosRegiao.length; i++) {
            var latLng = new google.maps.LatLng(this.eventosRegiao[i].local.latitude, this.eventosRegiao[i].local.longitude);
            marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: this.eventosRegiao[i].descricao,
                icon: __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* Util */].pathIcon(this.eventosRegiao[i].esporte.imagem)
            });
            markers.push(marker);
            var idEvento = this.eventosRegiao[i].id;
            google.maps.event.addListener(marker, 'click', (function (marker, i, idEvento) {
                return function () {
                    self.carregaEvento(idEvento);
                };
            })(marker, i, idEvento));
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
            //console.log(this.eventosRegiao[i].esporte.imagem);
        }
    };
    MapsComponent.prototype.carregaEvento = function (idEvento) {
        var param = { id: idEvento };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__evento_evento__["a" /* EventoComponent */], param);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'maps',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/maps/maps.html"*/`<!-- Generated template for the MapsComponent component -->\n<div class="wrapper">\n  <div id="map"></div> \n</div>`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/maps/maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_7__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* LoadingController */]])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cidade_service__ = __webpack_require__(144);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esporte_service__ = __webpack_require__(86);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_service__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__login_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_service__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__usuario_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_service__ = __webpack_require__(33);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsporteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsporteService = (function () {
    function EsporteService(http, login) {
        this.http = http;
        this.login = login;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.headers = this.headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
    }
    EsporteService.prototype.buscaTodasEsportes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/esporte?withPositions=1&per_page=500", { headers: this.headers });
    };
    EsporteService.prototype.buscaMeusEsportes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/esporte/meus/esportes", { headers: this.headers });
    };
    EsporteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], EsporteService);
    return EsporteService;
}());

//# sourceMappingURL=esporte.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Pais */
/* unused harmony export Estado */
/* unused harmony export Cidade */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Endereco; });
var Pais = (function () {
    function Pais() {
    }
    return Pais;
}());
var Estado = (function () {
    function Estado() {
        this.pais = new Pais();
    }
    return Estado;
}());
var Cidade = (function () {
    function Cidade() {
        this.estado = new Estado();
    }
    return Cidade;
}());
var Endereco = (function () {
    function Endereco() {
        this.cidade = new Cidade();
    }
    return Endereco;
}());

//# sourceMappingURL=endereco.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map