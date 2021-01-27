import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ListRestaurantsComponent } from '../components/list-restaurants/list-restaurants.component';
import { ManageRestaurantComponent } from '../components/manage-restaurant/manage-restaurant.component';
import { AuthGuard } from '../guards/auth.guard';

//Rutas del componente paginas, se desactiva el can Active para poder ver las rutras sin autenticacion
const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'listRestaurants', component: ListRestaurantsComponent, data: { title: 'List Restaurants' } },
      { path: 'manageRestaurants', component: ManageRestaurantComponent,  data: { title: 'Manage Restaurants' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
