import { Component, OnInit, NgZone } from '@angular/core';
import { ReclamationServiceService } from '../sevices/reclamation-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reclamation } from '../models/Reclamation';
import { Router } from '@angular/router';
import { FeedbackService } from '../sevices/feedback.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {


//  contactForm: FormGroup;

//reclamation: Reclamation = new Reclamation();

  constructor(private reclamationService:ReclamationServiceService,private feedbackService:FeedbackService, private router:Router, private ngZone:NgZone) {
          }

          nom:String="";
          email:String="";
          message:String="";

          saveReclamation(val:any){

           // console.log(val);
          /*  this.nom = val.nom;
            this.email = val.email;
            this.message = val.message;*/


            var fd = new FormData();

            fd.append("nom", val.nom);
            fd.append("email", val.email);
            fd.append("message", val.message);
            fd.append("machine", val.machine);

            this.reclamationService.demoapi(fd).subscribe((data)=>{

              console.log(data);
             // this.ngZone.run(()=>this.router.navigateByUrl('/réclamation'))
             
            });
        
          }
          saveFeedback(val:any){


            var fd = new FormData();
        
            fd.append("nom", val.nom);
            fd.append("email", val.email);
            fd.append("feedback", val.feedback);
        
            this.feedbackService.demoapi(fd).subscribe((data)=>{
        
              console.log(data);
             // this.ngZone.run(()=>this.router.navigateByUrl('/réclamation'))
        
            });
        
          }
        
        


  ngOnInit(): void {
  }






 /* onSubmit():any{

    this.reclamationService.addReclamation(this.contactForm.value).subscribe(()=>{
      console.log('succé');
    },
    (err)=>{
      console.log(err)
    });

  }*/



 /* send_reclamation(contactForm:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = {
      headers : headers,
    };
   
    this.http.post('http://127.0.0.1:8000/api/addContact', contactForm.value, options).subscribe((data:any)=>{
      let resp1 = Array.from(Object.keys(data), k=>data[k]);
    
      if(resp1[0] == 'true'){
        alert('Request Successfully Send');
        this.contactForm.reset();
      }else{
        alert('Please Try Again');
      }
    
    
    });

  }*/






}
