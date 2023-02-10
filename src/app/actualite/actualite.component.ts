
import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualite';
import { ActualiteService } from '../sevices/actualite.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  actualite:any;
  constructor(private actualiteService:ActualiteService) { }

  ngOnInit(): void {
    this.actualiteService.getActualite().subscribe(
      (data)=> this.actualite = data);
  }
  
  imageDirectoryPath:any = 'http://127.0.0.1:8000/adminAssets/img/';

}