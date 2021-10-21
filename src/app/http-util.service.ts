import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {
  // private url = 'http://hp-api.herokuapp.com/api/characters/house';
  constructor(private http: HttpClient) { }

  get(url:string) {
    return this.http.get(url);
  }

   
}
