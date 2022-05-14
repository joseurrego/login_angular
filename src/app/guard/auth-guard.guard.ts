import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  constructor (private authServices: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      // console.log("authguard ",this.authServices.renovarToken().pipe(map(ok => ok)))
    return this.authServices.renovarToken().pipe(map((resp) => {
      return resp.ok;
    }));
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ingreso = true
    console.log('ingreso a canLoad home - ',ingreso)
    return ingreso;
  }
}
