import { ChampsEtat, Materiel } from 'src/app/interface/materiel';
import { FunctionService } from './../../firebase/function.service';
import { champs, ChampsService, Pv } from './../../interface/Pv';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { CrudService } from 'src/app/firebase/crud.service';
import { DatePipe } from '@angular/common';
import { Categorie } from 'src/app/interface/categorie';

@Component({
  selector: 'app-pv-reception',
  templateUrl: './pv-reception.component.html',
  styleUrls: ['./pv-reception.component.scss']
})
export class PvReceptionComponent implements OnInit {

  pv: Pv[] = []
  Categorie:Categorie[]=[]
  Materiel:Materiel[]=[]


  ChampsService = ChampsService
  ChampsEtat = ChampsEtat

  champs = champs
  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc:FunctionService

    ) { }

  ngOnInit(): void {
   this.Show()
  }

  Show(){
    this.Crud.Get('Pv').subscribe(Pv =>{
      this.pv = Pv;
    })
    this.Crud.Get('Categorie').subscribe(Categorie =>{
      this.Categorie = Categorie;
    })
  }
  onDelete(Pv:Pv){
    this.Crud.Delete('Pv', Pv)
  }

  onAdd(Pv:Pv){
      Pv.gestionnaire = this.AuthService.user.host
      Pv.date = this.fnc.ChekDate(Pv)
      this.Crud.Add('Pv' , Pv)
  }
  onAddMateriel(Materiel:Materiel,Pv:Pv){
    Materiel.PV = Pv.numero
    Materiel.date = new DatePipe('en-US').transform(new Date, 'yyyy/MM/dd') as unknown as Date
    console.log(Materiel.numero)
    this.Crud.AddSub('Pv', Materiel.PV, 'Materiel', Materiel)
    Materiel.facteur = 'NaN'
    Materiel.valide = 'attente'
    Materiel.groupe_code_inventaire = Materiel.numero
    Materiel.gestionnaire = this.AuthService.user.host
    this.Crud.AddMateriel(Materiel)
  }
}
