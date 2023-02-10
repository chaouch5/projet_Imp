import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

 

  constructor(private http:HttpClient) { }




  


  demoapi(fdata:any){

    return this.http.post('http://127.0.0.1:8000/api/addContact', fdata);

   // console.log(fdata);
  }


}
