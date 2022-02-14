import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './persons/dashboard/dashboard.component';
import { FormComponent } from './persons/form/form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'register', component: FormComponent},
  { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
