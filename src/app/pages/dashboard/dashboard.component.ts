import { Component, OnInit } from '@angular/core';

//Services
import { ProductService } from 'src/app/services/product.service';

//Models
import { User } from '../../models/user.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  
  /* declare restaurants variable */
  products: Product[];

  constructor(private productService: ProductService) { 
    
  }

 async ngOnInit(){

        /* fetch restaurants when app loads */

      await  this.productService.listProducts().subscribe((event:any) => {
         this.products = event.result;
        });
  }

  atached(status: boolean){

    if(status) {
      this.ngOnInit()
    }
    
  }

}
