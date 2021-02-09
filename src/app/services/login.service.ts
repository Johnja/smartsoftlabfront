import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

//Interface
import { LoginForm } from '../interfaces/login-form.interface';

//API URL
const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router,) { }

  //función para solicitar Login y recibir Token

  login(formData:  LoginForm) {

    //Metodo HTTP

    return this.http.post(`${base_Url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('uid', resp.uid);
      })
    )

  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    this.router.navigateByUrl('/login');
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
