import { champs, Facteur } from './../../interface/Facteur';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { CrudService } from 'src/app/firebase/crud.service';
import { FunctionService } from 'src/app/firebase/function.service';
import { ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-facteur',
  templateUrl: './facteur.component.html',
  styleUrls: ['./facteur.component.css']
})
export class FacteurComponent implements OnInit {

  facteur: Facteur[] = []
 
  champs = champs
  constructor(
    public Crud: CrudService,
    public AuthService:AuthService,
    public dialog:DialogService,
    public fnc:FunctionService,
    public confirmationService:ConfirmationService,
    ) {}

  ngOnInit(): void {
    this.ShowFacteur()
  }
  ShowFacteur(){
    this.Crud.Get('Facteur').subscribe(Facteur =>{
      this.facteur = Facteur;
    })
  }
  onDelete(Facteur:Facteur) {
    this.confirmationService.confirm({
        header: 'Confirmation',
        accept: () => {
          this.Crud.Delete('Facteur',Facteur)
        },
        reject: () => {

            }
        }
    );
  }
  onValide(Facteur:Facteur){
    Facteur.valide = !Facteur.valide
    this.Crud.Update('Facteur',Facteur)
    this.Crud.UpdateSub('Fournisseur',Facteur.fournisseur,'Facteur',Facteur)
  }
  OnDialogValide(Facteur:Facteur){
    this.dialog.ValidationFacteur(Facteur)
  }
  
  onAdd(Facteur:Facteur){
      Facteur.comptable = this.AuthService.user.host
      Facteur.ht = 0
      Facteur.valide = false
      Facteur.tva = 19
      Facteur.ttc = 0
      Facteur.date = this.fnc.ChekDate(Facteur)
      this.Crud.Add('Facteur',Facteur)
  }


}
