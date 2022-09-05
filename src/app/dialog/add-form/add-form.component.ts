import { Categorie } from './../../interface/categorie';
import { CrudService } from './../../firebase/crud.service';
import { Fournisseur } from './../../interface/fournisseur';
import { ChampsEtat, Materiel } from './../../interface/materiel';
import { Facteur } from './../../interface/Facteur';
import { Pv, ChampsService } from './../../interface/Pv';
import { AuthService } from 'src/app/firebase/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DialogService } from 'src/app/Services/dialog.service';
import { FunctionService } from 'src/app/firebase/function.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  Materiel:Materiel[]=[]
  Pv: Pv= this.data.Pv
 

  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public Dialog:DialogService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
  ngOnInit(): void { 
    this.show()
  }
  show(){
    this.Crud.GetSub('Pv','Materiel',this.Pv).subscribe(Materiel =>{
      this.Materiel = Materiel;
    })

  }

  onDelete(Materiel:Materiel){
    this.Crud.Delete('Materiel',Materiel)
  }
  

}
