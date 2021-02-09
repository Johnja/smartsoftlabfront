import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

//Interfaces
import { UserForm } from '../interfaces/user-form.interface';

//model

import { User } from '../models/user.model'

//Enviroment URL
const base_Url = environment.base_Url;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Obtener el Token

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  //Obtener el uid del user

  get uid(): string {
    return localStorage.getItem('uid') || '';
  }

  //Obtener el Header

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  //Función para enviar datos y obtener los purchases para mostrar en la tabla.

  createUser(formData: UserForm) {

    //Se construye URL

    const url = `${base_Url}/users`;

    //Solicitud HTTP

    return this.http.post(url, formData, this.headers);
  }

  listUsers() {

    const url = `${base_Url}/users`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp: { ok: boolean, users: User[] }) => resp.users)
      );
  }

  getUserById(id: string) {

    const url = `${base_Url}/users/${id}`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp: { ok: boolean, user: User }) => resp.user)
      );
  }

  updateUser(formData: UserForm) {

    const url = `${base_Url}/users/${formData.id}`;

    return this.http.put(url, formData, this.headers);
  }

  deleteUser(_id: string) {

    const url = `${base_Url}/users/${_id}`;
    return this.http.delete(url, this.headers);
  }
}
