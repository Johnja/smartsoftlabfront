import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//Modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Components
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    LoginComponent, 
    OtpComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
  ], 
  exports: [
    OtpComponent,
    LoginComponent,
  ]
})
export class AuthModule { }
