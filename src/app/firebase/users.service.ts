import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interface/User';
import { AlertsService } from '../Services/alerts.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user!: User
  users!: Observable<User[]>;

  constructor(public FireStore: AngularFirestore, public FireAuth: AngularFireAuth,public alert:AlertsService ) { }


  GetAllUsers(){
    this.users = this.FireStore.collection('User').valueChanges() as unknown as Observable<User[]>;
    return this.users
 }
}
