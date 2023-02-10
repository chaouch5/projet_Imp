import { Component, OnInit } from '@angular/core';
import { Produits } from '../models/produit';
import { ProdService } from '../sevices/produit.service';
//import { CateService } from '../sevices/cate.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  imageDirectoryPath: any = 'http://127.0.0.1:8000/adminAssets/img/';
  produit: Produits[] | undefined;
  categorie: Categorie[] | undefined;

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {

    this.prodService.getProd().subscribe(
      (data: Produits[]) => this.produit = data);
    this.prodService.getProdd().subscribe(
      (data: Categorie[]) => this.categorie = data);

  }

  filtercat(event: any) {
    let value = event.target.value;
    if (value == "all") {
      this.prodService.getProd().subscribe(
        (data: Produits[]) => this.produit = data);
    }
    else {
      this.getfilter(value)
      console.log(value)
    }
  }
  getfilter(key: any) {
    this.prodService.getfilter(key).subscribe((res: any) => { this.produit = res })

  }

}


