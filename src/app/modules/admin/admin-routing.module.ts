import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-product',
    loadChildren: () => import('./pages/list-product/list-product.module').then(m => m.ListProductModule),
  },
  {
    path: 'list-role',
    loadChildren: () => import('./pages/list-role/list-role.module').then(m => m.ListRoleModule),
  },
  {
    path: 'list-category',
    loadChildren: () => import('./pages/list-category/list-category.module').then(m => m.ListCategoryModule),
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
