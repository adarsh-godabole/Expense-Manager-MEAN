import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path:'addexpense' , component:AddExpenseComponent},
  {path:'dashboard' , component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
