import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';


@NgModule({
  declarations: [
  ListRestaurantsComponent,
  ManageRestaurantComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ], 
  exports: [
    ListRestaurantsComponent,
    ManageRestaurantComponent
  ]
})
export class ComponentsModule { }
