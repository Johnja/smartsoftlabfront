import { Component, OnInit } from '@angular/core';

//modules
import { MatAccordion } from '@angular/material/expansion';
import { MatTabGroup } from '@angular/material/tabs';

//Services

import { ProductService } from 'src/app/services/product.service';

//model

import { Product } from '../../models/product.model';

//SweetAlert
import Swal from 'sweetalert2'


@Component({
  selector: 'app-managment-product',
  templateUrl: './managment-product.component.html',
  styles: [
  ]
})
export class ManagmentProductComponent implements OnInit {

  headElements: string[] = ['id', 'name', 'category', 'priece', 'stock'];

  products: Product[];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.uploadProducts();

  }

  uploadProducts() {

    this.productService.listProducts().subscribe((products: any) => {
      this.products = products;
    });
  }

  getProductUpdate(id: string) {

    this.productService.getProductById(id).subscribe((product: any) => {
      this.product = product;
    }

    );
  }

  onCreate(formData: any) {

    this.productService.createProduct(formData.value).subscribe(event => {
      Swal.fire('creado', 'Producto creado', 'success');
    })

  }

  update(formData: any) {

    this.productService.updateProduct(formData.value).subscribe(event => {
      Swal.fire('creado', 'Producto  Actualizado', 'success');
    });

  }

  getProductDelete(id: string) {

    Swal.fire({
      title: '¿Borrar producto?', text: `Esta a punto de eliminar un producto`,
      icon: 'question', showCancelButton: true, confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {

        this.productService.deleteProduct(id).subscribe(resp => {

          this.products = []
          this.uploadProducts();
          Swal.fire(
            'Producto borrado',
            `fue eliminado correctamente`,
            'success'
          );

        });

      }
    })
  }

  verifyChange(status: boolean) {

    if (status) {
      this.ngOnInit();
    }
  }

}
