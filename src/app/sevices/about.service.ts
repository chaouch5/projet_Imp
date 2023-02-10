import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/aboutUs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }


  baseUrl = 'http://127.0.0.1:8000/api';


  
  getAbout(){

    return this.http.get<About[]>(this.baseUrl + '/getPresentation');


  }
}
