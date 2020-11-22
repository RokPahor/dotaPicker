import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
//Service for API calls (Hero Data)

export class HeroService {              
  
  constructor(private http: HttpClient, private helperApi: HelperService) { }            
  //-------------------------------------------------------------------------------------------------------------------------         
  //FLASK CALLS
  localPort = "http://localhost:5000"

  public getAllHeroes(): Observable<any> {
    return this.http.get(`${this.localPort}/all_heroes`)
  }
  public goodWith(id:any): Observable<any> {
    return this.http.post(`${this.localPort}/good_with`,{"id" : id})
  }

  public goodAgainst(id:any): Observable<any> {
    return this.http.post(`${this.localPort}/good_against`,{"id" : id})
  }

//---------------------------------------------------------------------------------------------------------------------------
//MONGODB CALLS
  public getAllHeroes2(): Observable <any>{
    return this.http.get(`${this.helperApi.getHeroApi()}/heroes`);
  }

  public updateHero(heroId, updateData: Object): Observable <any>{
    return this.http.patch(`${this.helperApi.getHeroApi()}/heroes/${heroId}`, updateData);
  }
  }