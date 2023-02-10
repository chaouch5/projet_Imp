import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CateService {

  constructor(private http:HttpClient) { }


  baseUrl = 'http://127.0.0.1:8000/api/produit/categorie';


  getProdd(){

    return this.http.get<Categorie[]>(this.baseUrl );


  }
 
}