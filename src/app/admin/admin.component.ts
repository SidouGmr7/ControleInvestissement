import { Component, OnInit } from '@angular/core';
import { AuthService } from '../firebase/auth.service';
import { ScreenService } from '../Services/screen.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public screen: ScreenService,
    public authService:AuthService
    ) { }

  ngOnInit(): void {
    
  }

}

