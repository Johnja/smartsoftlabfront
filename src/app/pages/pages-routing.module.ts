import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { TableSearchComponent } from '../components/table-search/table-search.component';
import { AuthGuard } from '../guards/auth.guard';

//Rutas del componente paginas, se desactiva el can Active para poder ver las rutras sin autenticacion
const routes: Routes = [
  {
    path: 'dashboard', 
    component: PagesComponent,
    // canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'tableSearch', component: TableSearchComponent, data: { title: 'Table' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
