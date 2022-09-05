import { DialogService } from './dialog.service';
import { AlertsService } from './alerts.service';
import { NgModule } from '@angular/core';
import { ScreenService } from './screen.service';



@NgModule({
  providers: [
    AlertsService,
    DialogService,
    ScreenService
  ]
})
export class ServiceModule { }
