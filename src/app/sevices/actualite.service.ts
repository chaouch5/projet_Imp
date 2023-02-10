import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actualite } from '../models/actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';
  
  getActualite(){

    return this.http.get(this.baseUrl + '/getActualite');


  }
}