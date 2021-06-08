import { ListRoleComponent } from './list-role/list-role.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './../../../../layouts/admin/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ListRoleComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
