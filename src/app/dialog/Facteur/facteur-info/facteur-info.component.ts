import { Component, Inject, OnInit } from '@angular/core';
import { MaterieldeFacteur , ChampsMaterieldeFacteur } from 'src/app/interface/MaterieldeFacteur';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Facteur } from 'src/app/interface/Facteur';
import { CrudService } from 'src/app/firebase/crud.service';

@Component({
  selector: 'app-facteur-info',
  templateUrl: './facteur-info.component.html',
  styleUrls: ['./facteur-info.component.css']
})
export class FacteurInfoComponent implements OnInit {
  materieldeFacteur : MaterieldeFacteur[] = []
  champs = ChampsMaterieldeFacteur 
  Facteur : Facteur = this.data
  constructor(
    public Crud:CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  ngOnInit(): void {
    this.ShowFacteur()
  }
  ShowFacteur(){
    this.Crud.GetSub('Facteur','Materiel',this.Facteur).subscribe(materieldeFacteur =>{
      this.materieldeFacteur = materieldeFacteur;
    })
    return this.materieldeFacteur
  }
  onAdd(materieldeFacteur:MaterieldeFacteur){
    let Facteur:Facteur = this.Facteur
    materieldeFacteur.montant = materieldeFacteur.prix * materieldeFacteur.qts
    this.Crud.AddSub('Facteur',Facteur.numero,'Materiel',materieldeFacteur)
    Facteur.ht = Facteur.ht + materieldeFacteur.montant
    Facteur.ttc = Facteur.ht + Facteur.tva
    this.Crud.Update('Facteur',Facteur)
  }
  onDelete(materieldeFacteur:MaterieldeFacteur){
    let Facteur:Facteur = this.Facteur
    materieldeFacteur.montant = materieldeFacteur.prix * materieldeFacteur.qts
    this.Crud.DeleteSub('Facteur',Facteur.numero,'Materiel',materieldeFacteur)
    Facteur.ht = Facteur.ht - materieldeFacteur.montant
    Facteur.ttc = Facteur.ht + Facteur.tva
    if(Facteur.ttc < 0 ) Facteur.ttc = 0
    if(Facteur.ht < 0 ) Facteur.ht = 0
    this.Crud.Update('Facteur',Facteur)
  }
}

