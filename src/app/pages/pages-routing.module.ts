import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';
import { ManagmentUserComponent } from './managment-user/managment-user.component';
import { ManagmentProductComponent } from './managment-product/managment-product.component';
import { AdComponent } from './ad/ad.component';
import { StatisticsComponent } from './statistics/statistics.component';

//Rutas del componente paginas, se desactiva el can Active para poder ver las rutras sin autenticacion
const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'ad', component: AdComponent, data: { title: 'Anuncios' } },
      { path: 'managmentUser', component: ManagmentUserComponent,  data: { title: 'User' } },
      { path: 'managmentProduct', component: ManagmentProductComponent,  data: { title: 'Product' } },
      { path: 'search', component: SearchComponent,  data: { title: 'search' } },
      { path: 'statistics', component: StatisticsComponent,  data: { title: 'Repostes' } },
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
