import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public httpClient: HttpClient) { }
  // API CALLS
  public login(user): Observable<any> {
    return this.httpClient.post(`${environment.helperApi.base}/login`, {user});
  }
  // ENVIROMENT
  public getHeroApi(){
    return environment.heroesApi.base;
  }
}
