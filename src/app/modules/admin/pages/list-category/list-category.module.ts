import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { RoleRoutingModule } from '../list-role/role-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryFormComponent } from './list-category-form/list-category-form.component';
import { ListCategoryTableComponent } from './list-category-table/list-category-table.component';



@NgModule({
  declarations: [ListCategoryComponent, ListCategoryFormComponent, ListCategoryTableComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule, 
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ListCategoryModule { }
