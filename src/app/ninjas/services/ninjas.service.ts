import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ninja } from '../interfaces/ninjas.interface';

@Injectable({
  providedIn: 'root'
})
export class NinjasService {

  constructor( private http:HttpClient ) { }

  url: string = 'http://localhost:3000/ninjas';

  getNinjas(): Observable<Ninja[]>{
    return this.http.get<Ninja[]>( this.url );
  }

  getNinjaById( id:string ): Observable<Ninja>{
    // return this.http.get<Ninja>( `http://localhost:3000/ninjas/${id}` )
    return this.http.get<Ninja>( this.url.concat(`/${id}`) )
  }
}
