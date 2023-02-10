import { Component, OnInit } from '@angular/core';
import { About } from '../models/aboutUs';
import { AboutService } from '../sevices/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:About[] = [];
 // pathImg:any = 'http://127.0.0.1:8000/public/adminAssets/img/'

 pathImg:any = 'http://127.0.0.1:8000/adminAssets/img/';  
  constructor(private aboutService:AboutService) {}

  ngOnInit(): void {

  this.aboutService.getAbout().subscribe(
    (data:About[])=>this.about = data
    );

  }

}
