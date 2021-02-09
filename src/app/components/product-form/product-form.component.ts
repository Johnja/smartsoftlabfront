import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';

//Services
import { ProductService } from 'src/app/services/product.service';

//SweetAlert
import Swal from 'sweetalert2';

//model

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() onItemAdded: EventEmitter<boolean>;
  @Output() onItemUpdate: EventEmitter<boolean>;
  @Output() productFormFull: EventEmitter<any>;

  minLength: number = 6;

  //Formulario de login
  productForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    priece: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private productService: ProductService) {

    this.onItemAdded = new EventEmitter(false);
    this.onItemUpdate = new EventEmitter(false);
    this.productFormFull = new EventEmitter();

  }

  async ngOnInit() {

    this.isProductArrive();

  }

  public onCreate() {

    this.onItemAdded.emit(true);
    this.onItemUpdate.emit(true);
    this.productFormFull.emit(this.productForm);
    this.productForm.reset();

  }

  isProductArrive() {

    if (this.product) {
      this.productForm.patchValue(
        {
          id: this.product.id,
          name: this.product.name,
          category: this.product.category,
          priece: this.product.priece,
          stock: this.product.stock,
        });
    }
  }

  get f() { return this.productForm.controls; }

}
