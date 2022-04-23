import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Ninja } from '../interfaces/ninjas.interface';

@Injectable({
  providedIn: 'root'
})
export class NinjasService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http:HttpClient ) { }

  getNinjas(): Observable<Ninja[]>{
    // http://localhost:3000/ninjas/
    return this.http.get<Ninja[]>( `${this.baseUrl}/ninjas` );
  }

  getNinjaById( id:string ): Observable<Ninja>{
    // http://localhost:3000/ninjas/leaf-naruto
    return this.http.get<Ninja>( `${this.baseUrl}/ninjas/${id}` );
  }

  getSuggests( term: string ):Observable<Ninja[]>{
    // http://localhost:3000/ninjas?q=a&_limit=5
    return this.http.get<Ninja[]>( `${this.baseUrl}/ninjas/?q=${term}&_limit=5` );
  }
}