import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './app-init';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { ProductRoutingModule } from './modules/admin/pages/list-product/product-routing.module';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { AddRoutingModule } from './modules/test/pages/add-routing.module';
import { ProductAddModule } from './modules/testrouting/product-add.module';
import { NewRoutingModule } from './modules/testrouting/add-product/new-routing.module';
import { NewTestRoutingModule } from './modules/testrouting/new-test/new-test-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,

    //add more modules here

    AppRoutingModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    ProductRoutingModule,
    LoginRoutingModule,
    AddRoutingModule,
    ProductAddModule,
    NewRoutingModule,
    NewTestRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
