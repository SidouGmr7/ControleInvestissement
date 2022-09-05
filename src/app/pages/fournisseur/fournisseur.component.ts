import { Facteur, champs } from './../../interface/Facteur';
import { AlertsService } from './../../Services/alerts.service';
import { CommunicationService } from './../../Services/communication.service';
import { Fournisseur } from './../../interface/fournisseur';
import { DialogService } from 'src/app/Services/dialog.service';
import { AuthService } from 'src/app/firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { champspaiementfournisseur, champsfournisseur } from 'src/app/interface/fournisseur';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  Facteur : Facteur[] = []
  Fournisseur: Fournisseur[] = []
  FournisseurP!: Fournisseur
  champs = champs
  champsfournisseur = champsfournisseur
  champspaiementfournisseur = champspaiementfournisseur

  x:number = 0
  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc:FunctionService,
    public com:CommunicationService,
    public alert:AlertsService
    ) { }

  ngOnInit(): void {
    this.ShowFournisseur()
  }

  Post(Fournisseur:Fournisseur){
    this.com.PostJson(Fournisseur).subscribe(
      () => {
        console.log('Post is Good');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.FournisseurP = this.com.GetPaiment()
    this.Crud.Update('Fournisseur', this.FournisseurP)
  }
    
  ShowFournisseur(){
    this.Crud.Get('Fournisseur').subscribe(Fournisseur =>{
      this.Fournisseur = Fournisseur;
    })
    this.Crud.Get('Facteur').subscribe(Facteur =>{
      this.Facteur = Facteur;
    })
  }
  onDelete(Fournisseur:Fournisseur){
    this.Crud.Delete('Fournisseur',Fournisseur)
  }
  onShowFacteurdeFournisseur(Fournisseur:Fournisseur){
    this.dialog.Display(Fournisseur,'Fournisseur')
  }

  paiement(Fournisseur:Fournisseur,mantant:string){

    Fournisseur.dette = Fournisseur.dette - Number(mantant)
    if(Fournisseur.dette <= 0){
      Fournisseur.payer = true
      Fournisseur.RetardPaiement = 0
      Fournisseur.dette = 0
      Fournisseur.priorite = 0

    }
      this.Crud.Update('Fournisseur',Fournisseur)
    }

  onAdd(Fournisseur:Fournisseur){
    Fournisseur.payer = false
    Fournisseur.priorite = 0
      this.Crud.Add('Fournisseur',Fournisseur)
  }

}
