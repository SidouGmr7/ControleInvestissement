import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor() { }
  public Toast = Swal.mixin({
    toast: true, position: 'top', showConfirmButton: false,
    timer: 2000,timerProgressBar: true,
  })
  public success(string: String){
    this.Toast.fire({
      icon: 'success',
      title: string
    })
  }
  public error(string: String){
    this.Toast.fire({
      icon: 'error',
      title: string
    })
  }
  public info(string: String){
    this.Toast.fire({
      icon: 'info',
      title: string
    })
  }
}
