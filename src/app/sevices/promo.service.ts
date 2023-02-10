import { Injectable } from '@angular/core';
import { Promotion } from '../models/Promotion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http:HttpClient) { }



  getPromos(){

    return this.http.get<Promotion[]>('http://127.0.0.1:8000/api/getPromotion');

  }
}
