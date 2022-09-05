import { ChampsMateriels, Materiel } from 'src/app/interface/materiel';
import { Component, Inject, OnInit } from '@angular/core';
import { champs, Facteur } from 'src/app/interface/Facteur';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/firebase/crud.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  Facteur: Facteur[] = []
  Materiel: Materiel[] = []
  champs = champs
  ChampsMateriels = ChampsMateriels
  constructor(
    public Crud: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit(): void {
    this.Show()
  }
  Show(){
    if(this.data.type == 'Fournisseur'){
      this.Crud.GetWithCond('Facteur','fournisseur',this.data.object.numero).subscribe(Facteur =>{
        this.Facteur = Facteur;})
    }
    if(this.data.type == 'Materiel'){
      this.Crud.Get('Materiel').subscribe(Materiel =>{
        this.Materiel = Materiel;})
    }
  }
}
