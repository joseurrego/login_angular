import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registro, FormRegistro } from '../interfaces/interfaces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  registrar( data : FormRegistro ): Observable<Registro> {
    return this.http.post<Registro>(`${this.baseUrl}/new`,data).pipe(tap((data) => {
      console.log(data.token);
    }))
  }
}
