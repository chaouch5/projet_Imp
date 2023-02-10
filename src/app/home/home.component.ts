import { Component, OnInit } from '@angular/core';
import { HomeService } from '../sevices/home.service';
import { Produits } from '../models/produit';
import { Actualite } from '../models/actualite';
import { Promotion } from '../models/Promotion';
import { PromoService } from '../sevices/promo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  imgPath:any = 'http://127.0.0.1:8000/adminAssets/img/';  
  slideConfig = {autoplay: true, autoplaySpeed: 2000,"slidesToShow": 1, "slidesToScroll": 1};
  produit :Produits[] | undefined;
  actualite :Actualite[] | undefined;
  promos :Promotion[] | undefined;
  constructor(private homeService: HomeService, private promoService:PromoService) { }
  homeSlider = {items:1, dots:true, nav:true}
  ngOnInit(): void {

   /* 
    this.homeService.getLimitProd().subscribe(
      (data:Produits[])=> this.produit = data
    );*/

    this.homeService.getLimitProd().subscribe(
      (data:Produits[])=> this.produit = data);
      this.homeService.getLimitAct().subscribe(
        (data:Actualite[])=> this.actualite = data);

        this.promoService.getPromos().subscribe(
          (data:Promotion[]) => this.promos = data);


  }

}
