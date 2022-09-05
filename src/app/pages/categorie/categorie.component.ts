import { AuthService } from './../../firebase/auth.service';
import { Categorie } from './../../interface/categorie';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';
import { ChampsCategorie } from 'src/app/interface/categorie';
import { DialogService } from 'src/app/Services/dialog.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  Categorie: Categorie[] = [] 
  champs = ChampsCategorie    
  constructor(
    public Crud: CrudService,
    public dialog:DialogService,
    public AuthService: AuthService,
    public fnc:FunctionService,
    ) { }

  ngOnInit(): void {
    this.ShowCategorie()

  }
  
  ShowCategorie(){
    this.Crud.Get('Categorie').subscribe(Categorie =>{
      this.Categorie = Categorie;
    })
  }
  onDelete(Categorie:Categorie){
    this.Crud.Delete('Categorie',Categorie)
  }
  onAdd(Categorie:Categorie){
    this.Crud.Add('Categorie',Categorie)
  }

}
