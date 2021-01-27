import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//Components
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ], 
  exports: [
    LoginComponent,
  ]
})
export class AuthModule { }
