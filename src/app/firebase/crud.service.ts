import { Facteur } from './../interface/Facteur';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Fournisseur } from '../interface/fournisseur';
import { Materiel } from '../interface/materiel';
import { MaterieldeFacteur } from '../interface/MaterieldeFacteur';
import { AlertsService } from '../Services/alerts.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  Collection!: Observable<any[]>;
  Collection1!: Observable<any>;

  Fournisseur!: Observable<Fournisseur[]>;
  Materiel!: Observable<Materiel[]>;
  MaterieldeFacteur!: Observable<MaterieldeFacteur[]>;

  constructor(
    public FireStore: AngularFirestore,
    public alert: AlertsService
  ) {}

  //***************** Add *************************************
  Add(Collection: string, Object: any) {
    this.FireStore.collection(Collection)
      .doc(Object.numero)
      .get()
      .subscribe((doc) => {
        if (!doc.exists) {
          this.FireStore.collection(Collection)
            .doc(Object.numero)
            .set(Object)
            .then(() => {
              this.alert.success(
                Collection + ' ' + Object.numero + ' est ajouter'
              );
            });
        } else {
          this.alert.info(
            Collection + ' ' + Object.numero + ' est déja existe'
          );
        }
      });
  }
  AddSub(Collection: string, Id: string, SubCollection: string, Object: any) {
    return this.FireStore.collection(Collection)
      .doc(Id)
      .collection(SubCollection)
      .doc(Object.numero)
      .get()
      .subscribe((doc) => {
        if (!doc.exists) {
          this.FireStore.collection(Collection)
            .doc(Id)
            .collection(SubCollection)
            .doc(Object.numero)
            .set(Object);
        } else {
          this.alert.error(
            Collection + ' ' + Object.numero + ' est déja existe'
          );
        }
      });
  }

  AddMateriel(materiel: Materiel) {
    for (let index = 0; index < materiel.quantite; index++) {
      let a: number = parseInt(materiel.numero) + 1;
      materiel.numero = a.toString();
      this.FireStore.collection('Materiel').doc(materiel.numero).set(materiel);
    }
  }
  //***************** Delete *************************************

  Delete(Collection: string, Object: any) {
    this.FireStore.collection(Collection)
      .doc(Object.numero)
      .delete()
      .then(() => {
        this.alert.success(
          Collection + ' ' + Object.numero + ' a été supprimer'
        );
      });
  }

  DeleteSub(
    Collection: string,
    Id: string,
    SubCollection: string,
    Object: any
  ) {
    this.FireStore.collection(Collection)
      .doc(Id)
      .collection(SubCollection)
      .doc(Object.numero)
      .delete()
      .then(() => {
        this.alert.success(
          SubCollection + ' : ' + Object.numero + ' a été supprimer'
        );
      });
  }

  //***************** Update *************************************

  Update(Collection: string, Object: any) {
    this.FireStore.collection(Collection)
      .doc(Object.numero)
      .update(Object)
      .then(() => {
        this.alert.success(
          Collection + ' : ' + Object.numero + ' est mise a jour'
        );
      });
  }

  UpdateSub(
    Collection: string,
    Id: string,
    SubCollection: string,
    Object: any
  ) {
    return this.FireStore.collection(Collection)
      .doc(Id)
      .collection(SubCollection)
      .doc(Object.numero)
      .set(Object)
      .then(() => {
        this.alert.success(
          Collection + ' : ' + Object.numero + ' est mise a jour'
        );
      });
  }

  //***************** Display *************************************

  Get(Collection: string) {
    if (Collection == 'Fournisseur')
      this.Collection = this.FireStore.collection(Collection, (ref) =>
        ref.orderBy('priorite', 'desc')
      ).valueChanges();
    else this.Collection = this.FireStore.collection(Collection).valueChanges();
    return this.Collection;
  }
  GetWithCond(Collection: string, Champ: string, Value: any) {
    this.Collection = this.FireStore.collection(Collection, (ref) =>
      ref.where(Champ, '==', Value)
    ).valueChanges();
    return this.Collection;
  }
  GetSub(Collection: string, SubCollection: string, Object: any) {
    this.Collection = this.FireStore.collection(Collection)
      .doc(Object.numero)
      .collection(SubCollection)
      .valueChanges();
    return this.Collection;
  }

  // ************ Function *************

  set(Collection: string, Object: any[]) {
    Object.forEach((obj) => {
      this.setfirebase(Collection, obj);
      console.log('message 1');
    });
  }
  setfirebase(Collection: string, Object: any) {
    this.FireStore.collection(Collection)
      .doc(Object.numero)
      .set(Object)
      .then(() => {
        this.alert.success(Collection + ' ' + Object.numero + ' a été Ajouter');
      });
  }
}
