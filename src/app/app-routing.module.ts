import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutUs', component: AboutComponent},
  {path: 'produits', component: ProduitComponent},
  {path: 'actualites', component: ActualiteComponent},
  {path: 'réclamation', component: ReclamationComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'show/:id', component: ShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }