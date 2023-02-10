import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produits } from '../models/produit';
import { Actualite } from '../models/actualite';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  getLimitProd(){

    return this.http.get<Produits[]>('http://127.0.0.1:8000/api/latestProd' );


  }


  getLimitAct(){

    return this.http.get<Actualite[]>('http://127.0.0.1:8000/api/latestAct' );


  }





}
