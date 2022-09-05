import { Categorie } from './../../interface/categorie';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';
import { Materiel, ChampsMateriels, ChampsAmortiss } from 'src/app/interface/materiel';
import { DialogService } from 'src/app/Services/dialog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-amortissements',
  templateUrl: './amortissements.component.html',
  styleUrls: ['./amortissements.component.scss']
})
export class AmortissementsComponent implements OnInit {

  Materiel: Materiel[] = []
  Categorie: Categorie[] = []
  Champs = ChampsAmortiss
  activeIndex: number = 0;

  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc: FunctionService
    ) { }

  ngOnInit(): void {
    this.ShowMateriel()
    this.ShowCategorie()
  }
  ShowMateriel(){
    this.Crud.GetWithCond('Materiel','valide','valide').subscribe(materiel =>{
      this.Materiel = materiel;
    })
  }
  ShowCategorie(){
    this.Crud.Get('Categorie').subscribe(Categorie =>{
      this.Categorie = Categorie;
    })
  }
  onReforme(Materiel: Materiel){
    Materiel.valide = "reforme"
    Materiel.etat = "Renformer"
    Materiel.prix = 0
    this.Crud.Update('Materiel',Materiel)
   }
}
