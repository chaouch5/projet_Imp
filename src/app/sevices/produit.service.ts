import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produits } from '../models/produit';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient) { }


  //baseUrl = 'http://127.0.0.1:8000/api/produit';


  
  getProd(){

    return this.http.get<Produits[]>('http://127.0.0.1:8000/api/produit' );


  }

  getProdd(){

    return this.http.get<Categorie[]>('http://127.0.0.1:8000/api/produit/categorie' );


  }
  getfilter(key:any){
    return this.http.get('http://127.0.0.1:8000/api/produit/categorie' + '/'+key );
  }

  getshow(id:any){
    return this.http.get('http://127.0.0.1:8000/api/produit/show' + '/'+id );
  }

}