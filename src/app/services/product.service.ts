import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

//Interfaces
import { ProductForm } from '../interfaces/product-form.interface';

//model

import { Product } from '../models/product.model'

//Enviroment URL
const base_Url = environment.base_Url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  createProduct(formData: ProductForm) {

    //Se construye URL

    const url = `${base_Url}/products`;

    //Solicitud HTTP

    return this.http.post(url, formData, this.headers);
  }

  listProducts() {

    const url = `${base_Url}/products`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp: { ok: boolean, products: Product[] }) => resp.products)
      );
  }

  getProductById(id: string) {

    const url = `${base_Url}/products/${id}`;
    return this.http.get(url, this.headers)
      .pipe(
        map((resp: { ok: boolean, product: Product }) => resp.product)
      );
  }

  updateProduct(formData: ProductForm) {

    const url = `${base_Url}/products/${formData.id}`;

    return this.http.put(url, formData, this.headers);
  }

  deleteProduct(_id: string) {

    const url = `${base_Url}/products/${_id}`;
    return this.http.delete(url, this.headers);
  }
}
