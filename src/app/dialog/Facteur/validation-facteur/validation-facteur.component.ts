import { CrudService } from 'src/app/firebase/crud.service';
import { AlertsService } from './../../../Services/alerts.service';
import { Facteur } from '../../../interface/Facteur';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChampsMateriels, Materiel } from 'src/app/interface/materiel';
import { ChampsMaterieldeFacteurSansNumero, MaterieldeFacteur } from 'src/app/interface/MaterieldeFacteur';

@Component({
  selector: 'app-validation-facteur',
  templateUrl: './validation-facteur.component.html',
  styleUrls: ['./validation-facteur.component.scss']
})
export class ValidationFacteurComponent implements OnInit {
  materieldeFacteur : MaterieldeFacteur[] = []
  materiel: Materiel[] = []
  ChampsMaterieldeFacteur = ChampsMaterieldeFacteurSansNumero
  ChampsMateriel = ChampsMateriels
  activeIndex : number = 0
  Facteur:Facteur = this.data
  constructor(
    public Crud:CrudService,
    public alert:AlertsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.ShowFacteur()
    this.ShowMateriel()
  }
  ShowMateriel(){
    this.Crud.Get('Materiel').subscribe(materiel =>{
      this.materiel = materiel;
    })
  }
  ShowFacteur(){
    this.Crud.GetSub('Facteur','Materiel',this.Facteur).subscribe(materieldeFacteur =>{
      this.materieldeFacteur = materieldeFacteur;
    })
    return this.materieldeFacteur
  }
  
  calcule(){
    let TotaleMaterielPrix = 0
    let TotaleMaterieldeFacteurPrix = 0
    for (let mat of this.materiel){ 
      if(mat.facteur == this.data.numero)
      TotaleMaterielPrix = mat.prix + TotaleMaterielPrix 
    }
    for (let facmat of this.materieldeFacteur){ TotaleMaterieldeFacteurPrix = facmat.montant + TotaleMaterieldeFacteurPrix }
    if(TotaleMaterielPrix == TotaleMaterieldeFacteurPrix) return true; else return false;
  }
  onValide(){
    if(this.calcule())
    {
      this.Facteur.valide = !this.Facteur.valide
      this.Crud.Update('Facteur',this.Facteur)
     }
    else{
      this.alert.error("vérifier votre materiel que vous avez valider")
    }
  }
  ondesFactoration(Materiel:Materiel){
    Materiel.facteur = 'NaN'
    Materiel.comptable = 'NaN'
    Materiel.valide = "attente"
    this.Crud.Update('Materiel',Materiel)
    }
}