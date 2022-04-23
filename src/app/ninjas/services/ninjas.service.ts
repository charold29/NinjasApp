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
    return this.http.get<Ninja[]>( `${this.baseUrl}/ninjas` );
  }

  getNinjaById( id:string ): Observable<Ninja>{
    // return this.http.get<Ninja>( `http://localhost:3000/ninjas/${id}` )
    return this.http.get<Ninja>( `${this.baseUrl}/ninjas/${id}` )
  }
}
