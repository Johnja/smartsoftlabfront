import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //función para solicitar Login y recibir Token

  login(data: string) {

    //Construit JSON

    var  obj = `{"payload" : "${data}"}`
    var credentials = JSON.parse(obj);

    //Metodo HTTP
    
    return this.http.post(`${base_Url}/login?apiKey=252156`, credentials).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )

  }

  logOut() {
    localStorage.removeItem('token');
  }

  validateTokenServer(): Observable<boolean> {

    const token = localStorage.getItem('token') || '';
    return this.http.get(`${base_Url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }


}
