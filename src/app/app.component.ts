import { CommunicationService } from './Services/communication.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './firebase/auth.service';
import { ScreenService } from './Services/screen.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  constructor(
    public authService:AuthService,
    public screen:ScreenService,
    public com:CommunicationService
    ){}

  ngOnInit(): void {
      this.authService.NavigateAuth()
      this.screen.screenWidth = window.innerWidth;
      this.authService.DeleteUser()
  }
}
