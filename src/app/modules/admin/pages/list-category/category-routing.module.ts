import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './list-category/list-category.component';


const routes: Routes = [
  { path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListCategoryComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
