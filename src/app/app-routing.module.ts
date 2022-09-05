import { AmortissementsComponent } from './pages/amortissements/amortissements.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { FournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { PvReceptionComponent } from './pages/pv-reception/pv-reception.component';
import { FacteurComponent } from './pages/facteur/facteur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { MaterielComponent } from './pages/materiel/materiel.component';
import { AllMaterielComponent } from './pages/all-materiel/all-materiel.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent ,canActivate:[AuthGuard]},
  {path: 'admin' , component: AdminComponent,
    children: [
      {path: '', redirectTo: 'accueil', pathMatch: 'full'},
      {path: 'accueil' , component: AccueilComponent},
      {path: 'facteur' , component: FacteurComponent},
      {path: 'pv' , component: PvReceptionComponent},
      {path: 'dashboard' , component: DashboardComponent}, 
      {path: 'materiel', component: MaterielComponent},
      {path: 'allmateriel', component: AllMaterielComponent},
      {path: 'fournisseur', component: FournisseurComponent},
      {path: 'categorie', component: CategorieComponent},
      {path: 'amortissement', component: AmortissementsComponent},
      {path: '**', component: PageNotFoundComponent },
      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
