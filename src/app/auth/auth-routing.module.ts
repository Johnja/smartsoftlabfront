import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

//Components
import { LoginComponent } from './login/login.component';

//Rutas del modulo auth

const routes: Routes = [
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
