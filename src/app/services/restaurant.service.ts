import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

//Interfaces
import { RestaurantForm } from '../interfaces/restaurant-form.interface';

import { Restaurant } from '../models/restaurant.model'

//Enviroment URL
const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

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

  createRestaurant(formData:  RestaurantForm){

    //Se construye URL

    const url = `${base_Url}/restaurants`; 

    //Solicitud HTTP
    
    return this.http.post( url, formData, this.headers);
  }

  listRestaurants( ) {
    const url = `${ base_Url }/all/collection/restaurants/${this.uid}`;
    return this.http.get( url, this.headers );
  }

}
