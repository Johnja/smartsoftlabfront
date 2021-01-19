import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

//Models
import { PurchasesData } from '../models/purchasesdata.model';

const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  //Obtener el Token

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  //Obtener el Header

  get headers() {
    return {
      headers: {
        'Authorization': this.token
      }
    }
  }

  //Función para enviar datos y obtener los purchases para mostrar en la tabla.

  searchPurchases(data: string) {

    //Se contruye JSON

    var  obj = `{"payload" : "${data}"}`
    var sendData = JSON.parse(obj);

    //Se construye URL

    const url = `${base_Url}/pockets/transactions/purchases/${sendData}?apiKey=252156`; 

    //Solicitud HTTP
    
    return this.http.get( url, this.headers).pipe(
      map((resp:  PurchasesData[] ) =>  resp)
     );
  }

} 
