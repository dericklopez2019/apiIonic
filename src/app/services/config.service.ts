import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getUrl(key: any): string {
    return Env.host + Env.url[key];
  }
}


export const Env={
  host:'http://192.168.2.116:4998', //ip local

  url: {
    clienteListar:'/cliente',
    clienteGuardar:'/cliente',
    clienteEditar: '/cliente',
    clienteEliminar: '/cliente',
  }

}