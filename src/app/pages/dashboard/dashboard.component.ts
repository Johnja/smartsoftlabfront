import { Component, OnInit } from '@angular/core';

//Services
import { RestaurantService } from 'src/app/services/restaurant.service';

//Models
import { Restaurant } from '../../models/restaurant.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  
  /* declare restaurants variable */
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { 
    
  }

 async ngOnInit(){

        /* fetch restaurants when app loads */

      await  this.restaurantService.listRestaurants().subscribe((event:any) => {
         this.restaurants = event.result;
        });
  }

  atached(status: boolean){

    if(status) {
      this.ngOnInit()
    }
    
  }

}
