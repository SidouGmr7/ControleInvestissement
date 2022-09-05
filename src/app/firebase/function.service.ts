import { Facteur } from 'src/app/interface/Facteur';
import { Categorie } from './../interface/categorie';
import { Materiel } from 'src/app/interface/materiel';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  exportExcel(): void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, "materiel.xlsx");
  }
  //********************* calcul ***********************//
  
  TauxAmortissments(Materiel:Materiel,Categories:Categorie[]){
    let Taux!:number
    Categories.forEach(Categorie => {
      if(Materiel.categorie == Categorie.numero)
      Taux = Categorie.taux_amortissments
    });
    return Taux 
  }
  PrixActuel(Materiel:Materiel,Categories:Categorie[]){
    let date = (new Date().getTime() - new Date(Materiel.date).getTime()) /(1000 * 3600 * 24 * 365)
    let Taux = this.TauxAmortissments(Materiel,Categories) * date
    let PrixActuel = Materiel.prix  - (Materiel.prix * (Taux/100))
    return PrixActuel
  }
  ChekDate(Object:any){
    const date = new DatePipe('en-US').transform(Object.date, 'yyyy/MM/dd') as unknown as Date
      return date;
  }
 
}
