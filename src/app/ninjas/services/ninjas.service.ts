import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjasService {

  constructor( private http:HttpClient ) { }

  url: string = 'http://localhost:3000/ninjas';

  getNinjas(){
    return this.http.get(this.url);
  }

}
