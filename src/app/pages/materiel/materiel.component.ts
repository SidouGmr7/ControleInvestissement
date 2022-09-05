import { DialogService } from '../../Services/dialog.service';
import { AuthService } from 'src/app/firebase/auth.service';
import { ChampsMateriels, Materiel } from '../../interface/materiel';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css'],

})
export class MaterielComponent implements OnInit {

  materiel: Materiel[] = []
  champs = ChampsMateriels
  activeIndex: number = 0;

  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc: FunctionService
    ) { }

  ngOnInit(): void {
    this.ShowMateriel()
  }
  ShowMateriel(){
    this.Crud.Get('Materiel').subscribe(materiel =>{
      this.materiel = materiel;
    })
  }
  onAccipte(materiel:Materiel){
    this.dialog.FactorationMateriel(materiel)
  }
  onRefuse(materiel:Materiel){
    materiel.valide = "refuse"
    this.Crud.Update('Materiel',materiel)
  }

}

