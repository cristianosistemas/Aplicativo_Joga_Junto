import { Injectable } from '@angular/core';

/*
  Author : KM.Raouf
  Email : yajuve.25.dz@gmail.com
*/
@Injectable()
export class Util {

  constructor() {
    console.log('Hello UtilProvider Provider');
  }

  static pathAvatar(name: string): string {
    return './assets/avatar/' + name;
  }

  static pathImg(name: string):string {
    return './assets/img/' + name;
  }

  static pathIcon(name:string):string {
    return './assets/esportes/' + name;
  }

  static pathEsportes(name:string):string {
    return './assets/esportesAvatar/' + name;
  }

}
