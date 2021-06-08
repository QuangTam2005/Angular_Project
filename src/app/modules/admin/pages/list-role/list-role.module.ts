import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListRoleTableComponent } from './list-role-table/list-role-table.component';
import { ListRoleFormComponent } from './list-role-form/list-role-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListRoleComponent, ListRoleTableComponent, ListRoleFormComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ListRoleModule { }
