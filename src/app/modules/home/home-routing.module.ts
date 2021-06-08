import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/layouts/default/default-layout/default-layout.component';
import { HomeCardComponent } from './pages/home-card/home-card.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'card', component: HomeCardComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
