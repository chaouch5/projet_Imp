import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from '../sevices/produit.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
 imageDirectoryPath: any = 'http://127.0.0.1:8000/adminAssets/img/';
  data:any
 id:any;
  constructor(private route:ActivatedRoute ,private prodService: ProdService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.prodService.getshow(this.id).subscribe(data=>{this.data=data;console.log(data);})
  }

  
}
