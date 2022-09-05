import { AuthService } from './../../firebase/auth.service';
import { DialogService } from '../../Services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/Services/screen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService, 
    public dialog: DialogService,
    public screen:ScreenService
    ) { }

  ngOnInit(): void {
  
  }
  
}
