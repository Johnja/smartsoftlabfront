import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Modules 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


//Components
import { TableComponent } from './table/table.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
  TableComponent,
  UserFormComponent,
  ProductFormComponent,
  FilterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule

  ], 
  exports: [
    TableComponent,
    UserFormComponent,
    ProductFormComponent,
    FilterComponent
  ]
})
export class ComponentsModule { }
