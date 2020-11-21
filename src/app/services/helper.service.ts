import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public getHeroApi(){
    return environment.heroesApi.base;
  }
}
