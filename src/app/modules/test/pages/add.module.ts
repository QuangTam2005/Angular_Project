import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoutingModule } from './add-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class AddModule { }
