import { AuthService } from './../../firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  value:Boolean = false

  constructor(public authService:AuthService) {}
  ngOnInit(): void {}

  onLogin(email:string,password:string){
     this.authService.login(email,password)
  }
  ChangeValue(){
    this.value = !this.value
  }
  
 
}


