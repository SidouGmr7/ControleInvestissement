import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenWidth= window.innerWidth;
  collapsed= false;

  constructor() { }

}
