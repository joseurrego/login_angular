import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  constructor () {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      const ingreso = true
      console.log('ingreso a canActivate home - ',ingreso)
    return ingreso;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ingreso = true
    console.log('ingreso a canLoad home - ',ingreso)
    return ingreso;
  }
}
