import { Component, OnInit } from '@angular/core';
import { image } from 'src/app/data/images';
import { ScreenService } from 'src/app/Services/screen.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  numVisible = 3
  image = image
  constructor(public screen:ScreenService) { }

  ngOnInit(): void {
    if(this.screen.screenWidth <= 500){ this.numVisible = 1}
  }

}
