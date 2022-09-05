import { AuthService } from 'src/app/firebase/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(public AuthService:AuthService,public router:Router){ }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        if(!this.AuthService.isLogin) return true
        else 
        this.router.navigate(["admin"])
        return false
  
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if(!this.AuthService.isLogin)return true;
    else return false
  }
  
}
