import { Facteur } from '../interface/Facteur';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { SignupComponent } from '../auth/signup/signup.component';
import { ListusersComponent } from '../dialog/listusers/listusers.component';
import { UserInfoComponent } from '../dialog/user-info/user-info.component';
import { Materiel } from '../interface/materiel';
import { AddFormComponent } from '../dialog/add-form/add-form.component';
import { FacteurInfoComponent } from '../dialog/Facteur/facteur-info/facteur-info.component';
import { FactorationMaterielComponent } from '../dialog/Facteur/factoration-materiel/factoration-materiel.component';
import { ValidationFacteurComponent } from '../dialog/Facteur/validation-facteur/validation-facteur.component';
import { DisplayComponent } from '../dialog/display/display.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
 
  constructor(
    public dialog: MatDialog,
    ) { }

  FactorationMateriel(materiel:Materiel){
    this.dialog.open(FactorationMaterielComponent,{data: materiel})
  }

  ValidationFacteur(Facteur:Facteur){
    this.dialog.open(ValidationFacteurComponent,{data:Facteur})
  }
  ShowInfoFacteur(facteur:Facteur){
    this.dialog.open(FacteurInfoComponent,{data: facteur})
  }
  AddFormDialog(Add:any,Pv:any){
    this.dialog.open(AddFormComponent,{data: {type: Add,Pv: Pv}})
  }
  ListUsersDialog(){
    this.dialog.open(ListusersComponent)
  }
  UserInfoDialog(){
    this.dialog.open(UserInfoComponent)
  }
  SignupDialog(){
    this.dialog.open(SignupComponent)
  }
  Display(object: any,type: string) {
   this.dialog.open(DisplayComponent,{data: {object: object,type: type}})
  }
}
