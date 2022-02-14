import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonsModule { }
