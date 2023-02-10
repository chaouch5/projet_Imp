import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../sevices/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService, private router:Router) {
  }

  nom:String="";
  email:String="";
  message:String="";

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

}