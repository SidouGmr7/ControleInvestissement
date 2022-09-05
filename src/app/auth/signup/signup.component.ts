import { Component, OnInit } from '@angular/core';
import { roles, User } from 'src/app/interface/User';
import { AuthService } from 'src/app/firebase/auth.service';
import { AlertsService } from 'src/app/Services/alerts.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  roles= roles

  constructor(public authService:AuthService, public alert: AlertsService) {}

  ngOnInit(): void {}

   onSignup(host:string,email:string,password:string,role:string){
    let user: User = {
      id: '',
      host: '',
      email: '',
      password: '',
      role: '',
      etat: false
    }
    user.email = email
    user.host = host
    user.password = password
    user.role = role
    this.authService.signup(user)
  }


}
