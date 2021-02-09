import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ManagmentProductComponent } from './managment-product/managment-product.component';
import { ManagmentUserComponent } from './managment-user/managment-user.component';
import { AdComponent } from './ad/ad.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    SearchComponent,
    ManagmentProductComponent,
    ManagmentUserComponent,
    AdComponent,
    StatisticsComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    MatExpansionModule,
    MatTabsModule

  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    SearchComponent,
    ManagmentProductComponent,
    ManagmentUserComponent,
    AdComponent,
    StatisticsComponent,
  ]
})
export class PagesModule { }
