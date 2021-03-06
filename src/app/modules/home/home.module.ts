import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutModule } from 'src/app/layouts/default/default-layout.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeCardComponent } from './pages/home-card/home-card.component';


@NgModule({
  declarations: [HomeComponent, HomeCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DefaultLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ]
})
export class HomeModule { }
