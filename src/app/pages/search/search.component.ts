import { Component, OnInit } from '@angular/core';

//Services

import { ProductService } from 'src/app/services/product.service';

//model

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  headElements: string[] = ['id', 'name', 'category', 'priece', 'stock'];

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.uploadProducts()

  }

  uploadProducts() {
    this.productService.listProducts().subscribe(products => {
      this.products = products;
    });

  }

}
