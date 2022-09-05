import { FunctionService } from 'src/app/firebase/function.service';
import { DialogService } from '../../Services/dialog.service';
import { AuthService } from 'src/app/firebase/auth.service';
import { ChampsMateriels, Materiel } from '../../interface/materiel';
import { Component, Inject, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { CrudService } from 'src/app/firebase/crud.service';


@Component({
  selector: 'app-all-materiel',
  templateUrl: './all-materiel.component.html',
  styleUrls: ['./all-materiel.component.scss']
})
export class AllMaterielComponent implements OnInit {

  materiel: Materiel[] = []
  champs = ChampsMateriels
  activeIndex: number = 0;


  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc:FunctionService
    ) { }

  ngOnInit(): void {
    this.ShowMateriel()
  }
  ShowMateriel(){
    this.Crud.Get('Materiel').subscribe(materiel =>{
      this.materiel = materiel;
    })
  }
  onDelete(Materiel:Materiel){
    this.Crud.Delete('Materiel',Materiel)
  }
  onUpdate(Materiel: Materiel) {
    this.Crud.Update('Materiel',Materiel)
 }

}
