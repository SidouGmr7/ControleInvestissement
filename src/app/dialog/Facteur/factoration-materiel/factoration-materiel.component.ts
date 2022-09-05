import { AlertsService } from 'src/app/Services/alerts.service';
import { CrudService } from 'src/app/firebase/crud.service';
import { AuthService } from 'src/app/firebase/auth.service';
import { Materiel } from 'src/app/interface/materiel';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Facteur } from 'src/app/interface/Facteur';


@Component({
  selector: 'app-factoration-materiel',
  templateUrl: './factoration-materiel.component.html',
  styleUrls: ['./factoration-materiel.component.css']
})
export class FactorationMaterielComponent implements OnInit {

  facteur: Facteur[] = []

  constructor(
    public Crud:CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public AuthService:AuthService,
    public alert:AlertsService
    ){}

  ngOnInit(): void {
   this.ShowMateriel()
  }

  ShowMateriel(){
    this.Crud.GetWithCond('Facteur','valide',false).subscribe(Facteur =>{
      this.facteur = Facteur;
    })
  }

  onFactoration(numero_facteur:string){
    let materiel:Materiel = this.data
    materiel.facteur = numero_facteur
    materiel.comptable = this.AuthService.user.host
    materiel.valide = "valide"
    this.Crud.Update('Materiel',materiel)
    }
}

