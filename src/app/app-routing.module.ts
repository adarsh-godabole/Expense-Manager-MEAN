import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayExpensesComponent } from './display-expenses/display-expenses.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'addexpense' , component:AddExpenseComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'details/:name' , component:DisplayExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
