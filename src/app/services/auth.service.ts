import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Registro, FormRegistro, RenovarToken, User } from '../interfaces/interfaces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl;
  public _user!: User;

  constructor( private http: HttpClient ) { }


  get getToken(){
    return localStorage.getItem('token') || '' ;
  }

  get _traeruser(){
    return this._user;
  }

  get headers(){
    return new HttpHeaders({
      'x-token':this.getToken,
    });
  }

  registrar( data : FormRegistro ): Observable<Registro> {
    return this.http.post<Registro>(`${this.baseUrl}/new`,data).pipe(tap((data) => {
      console.log(data.token);
    }))
  }

  renovarToken() : Observable<RenovarToken>  {
    return this.http.get<RenovarToken>(`${this.baseUrl}/renew`, {
      headers:this.headers,
    }).pipe(tap(resp => {
      this._user = {
        id:resp.id,
        nombre:resp.nombre,
      }
    }),
      catchError(err => of(err))
    )
  }
}
