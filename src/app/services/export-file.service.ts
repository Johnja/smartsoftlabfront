import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

//Models
import { ExportsData} from '../models/exportsdata.model';

const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {

  constructor(private http: HttpClient) 
  {
   }

   //Obtener token de localStorage
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  //Obtener header

  get headers() {
    return {
      headers: {
        'Authorization': this.token
      }
    }
  }

  //Obtner datos exportables en el servicio que retorna un string

  getDatatoExport(data: string) {

    //Construccion de JSON
    var  obj = `{"payload" : "${data}"}`
    var sendData = JSON.parse(obj);

    //Construir URL API

    const url = `${base_Url}/pockets/transactions/purchases/export/${sendData}?apiKey=252156`; 

    //Solicitud HTTP
    
    return this.http.get( url, this.headers).pipe(
      map((resp:  ExportsData ) => resp )
     );
  }


}
