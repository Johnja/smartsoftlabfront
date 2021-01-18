import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
//LoginForm
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';


const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'   
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formData: LoginForm){

    return this.http.post(`${base_Url}/login`, formData).pipe(
      tap( (resp : any) => {
        localStorage.setItem('token', resp.token)
      })
    )
                    
  }

  logOut(){
    localStorage.removeItem('token');
  }

  validateToken(): Observable<boolean>{

    const token = localStorage.getItem('token') || '';   
    return this.http.get(`${ base_Url }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
      }),
      map( resp => true),
      catchError( error => of(false))
    );
  }
}
