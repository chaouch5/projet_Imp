import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Produits } from '../models/produit';
import { ProdService } from '../sevices/produit.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categorie: Categorie[] | undefined;
  produit: Produits[] | undefined;
  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
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
