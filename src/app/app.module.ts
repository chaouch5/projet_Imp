import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActualiteComponent } from './actualite/actualite.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { OwlModule } from 'ngx-owl-carousel';
import { FeedbackComponent } from './feedback/feedback.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MapComponent } from './map/map.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProduitComponent,
    ActualiteComponent,
    ReclamationComponent,
    FeedbackComponent,
    MapComponent,
    ShowComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
 
    OwlModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }