import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setToken(token: string){
    localStorage.setItem('ebdc55e8-bfa6-4b1b-b35e-e7a3f6367e50',token);
  }
  public getToken(){
    return localStorage.getItem('ebdc55e8-bfa6-4b1b-b35e-e7a3f6367e50');
  }
}
