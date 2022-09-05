import { AlertsService } from 'src/app/Services/alerts.service';
import { Injectable} from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore  } from '@angular/fire/compat/firestore';
import { User } from '../interface/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users!: Observable<User[]>;
  user: User ={
    host: '',
    email: '',
    password: '',
    role: '',
    etat: false,
    id: ''
  };
  isLogin = false;
  uid!:string

  constructor(
    public FireStore: AngularFirestore, 
    public FireAuth: AngularFireAuth,
    public alert:AlertsService,
    public router:Router
    ) {
    if(localStorage.getItem('user')!==null) { 
      this.GetUserLive() 
      this.isLogin = true;
    }
  }
    
   login(email:string,password:string){
     this.FireAuth.signInWithEmailAndPassword(email,password)
    .then(res =>{
      this.isLogin= true
      localStorage.setItem('user',JSON.parse(JSON.stringify(res.user)))
      localStorage.setItem('uid',JSON.parse(JSON.stringify(res.user?.uid)))
      this.GetUserLive()
      this.ChangeEtatLogin(true)
      this.router.navigate(['../admin'])
    }).catch(err =>{
        if(email == '')
        this.alert.error("l'email est vide")
        if(password == '')
        this.alert.error("le mote de pass est vide")
        else
        this.alert.error("verifier votre information")
        console.log(err)
      })
  }
   signup(user:User){
     this.FireAuth.createUserWithEmailAndPassword(user.email,user.password)
    .then(res =>{
      this.FireStore.collection('User').doc(res.user?.uid).set(user)
      this.alert.success("succcessfuly");
    }).catch(err =>{  this.alert.error(err.email); })
  }
  logout(){
    this.FireAuth.signOut().then(()=>{
      localStorage.clear()
      this.router.navigate(['home'])
      this.isLogin = false
      this.ChangeEtatLogin(false)
    
    })
  }

  async DeleteUser(){
    (await this.FireAuth.currentUser)?.delete()
  }
  
  GetUserLive(){
    this.uid = localStorage.getItem('uid') as unknown as string 
    this.FireStore.collection('User').doc(this.uid).get().subscribe((doc) =>{
      this.user = JSON.parse(JSON.stringify(doc.data()))
      localStorage.setItem('Usercurrant', JSON.stringify(this.user));
    })
  }
  ChekRole(role:string):boolean{
    if(this.user.role == role) 
    return true
    else return false 
  }
  ChekLogin():boolean {
    return this.isLogin;
  }
  ChangeEtatLogin(etat:Boolean){
    this.FireStore.collection('User').doc(this.uid).update({etat : etat})
  }
  NavigateAuth(){
    if(localStorage.getItem('user')==null)  this.router.navigate(['home'])
  }




}
