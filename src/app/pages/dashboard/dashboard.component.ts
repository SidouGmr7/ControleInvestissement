import { Fournisseur } from './../../interface/fournisseur';
import { Facteur } from 'src/app/interface/Facteur';
import { Materiel } from './../../interface/materiel';
import { DialogService } from '../../Services/dialog.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/firebase/auth.service';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Materiel:Materiel[] = []
  MaterielAccipte:Materiel[] = []
  MaterielRefuse:Materiel[] = []
  MaterielAttente:Materiel[] = []
  MaterielReformer:Materiel[] = []
  Facteur:Facteur[] = []
  Facteurvalider:Facteur[] = []
  FacteurAttente:Facteur[] = []
  Fournisseur : Fournisseur[] = []
  FournisseurAvecDattes : Fournisseur[] = []
  FournisseurSansDattes : Fournisseur[] = []
  data!: any
  data2!: any
  
  constructor(
    public authService:AuthService,
    public dialog:DialogService,
    public crud:CrudService,
    public fnc:FunctionService
    ) { }
  ngOnInit(): void {  
    this.ShowMateriel() 
    this.ShowFacteur()
    this.data = {
      labels: ['Valide','Refuse','Attente','Reforme'],
      datasets: [
          {
              data: [7, 14, 4, 4],
              backgroundColor: [
                  "#36A2EB",
                  "#22C55E",
                  "#FF6384",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#36A2EB",
                  "#22C55E",
                  "#FF6384",
                  "#FFCE56" 
              ]
          }
      ]
    };
    this.data2 = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021' , '2022'],
      datasets: [
          {
              label: 'Les dettes de sociéte',
              data: [4.8, 6.2, 3.1, 2.1, 4.2, 6.4, 7.2, 5.2],
              fill: true,
              borderColor: '#36A2EB',
              tension: .4,
              backgroundColor: 'rgba(54,162,253,0.2)'
          }
      ]
  };
  }
  ShowMateriel(){
    this.crud.Get('Materiel').subscribe(materiel =>{ this.Materiel = materiel; })
    this.crud.Get('Fournisseur').subscribe(Fournisseur =>{ this.Fournisseur = Fournisseur; })
    this.crud.GetWithCond('Materiel',"valide","valide").subscribe(materiel =>{ this.MaterielAccipte = materiel; })
    this.crud.GetWithCond('Materiel',"valide","refuse").subscribe(materiel =>{ this.MaterielRefuse = materiel; })
    this.crud.GetWithCond('Materiel',"valide","attente").subscribe(materiel =>{ this.MaterielAttente = materiel; })
    this.crud.GetWithCond('Materiel',"valide","reforme").subscribe(materiel =>{ this.MaterielReformer = materiel; })
    this.crud.GetWithCond('Fournisseur',"payer",false).subscribe(Fournisseur =>{ this.FournisseurAvecDattes = Fournisseur; })
    this.crud.GetWithCond('Fournisseur',"payer",true).subscribe(Fournisseur =>{ this.FournisseurSansDattes = Fournisseur; })

    
  } 
  ShowFacteur(){
    this.crud.Get('Facteur').subscribe(facteur =>{ this.Facteur = facteur; })
    this.crud.GetWithCond('Facteur',"valide",true).subscribe(facteur =>{ this.Facteurvalider = facteur; })
    this.crud.GetWithCond('Facteur',"valide",false).subscribe(facteur =>{ this.FacteurAttente = facteur; })
  }
  CalculMatnatTotale(Facteur:Facteur[]){
    let Mantant = 0;
    Facteur.forEach(fac => {
      Mantant += fac.ttc
    });
    return Mantant
  }

}
