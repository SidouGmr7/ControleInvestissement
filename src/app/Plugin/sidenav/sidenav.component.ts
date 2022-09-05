import { DialogService } from './../../Services/dialog.service';
import { AuthService } from 'src/app/firebase/auth.service';
import { sidenavData } from '../../data/side-data';
import { Component, OnInit} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ScreenService } from 'src/app/Services/screen.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut' ,[
      transition(':enter',[ 
        style({opacity:0}), animate('0.3s', style({opacity:1}))
      ]),
      transition(':leave',[ 
        style({opacity:1}), animate('0.3s', style({opacity: 0}))
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit {
  navData = sidenavData;
  constructor(public screen: ScreenService,public authService:AuthService,public dialog:DialogService){
  }

  ngOnInit(): void {
  }

  togglecollapse(): void{ 
    this.screen.collapsed = !this.screen.collapsed;
  
  }

 
}

