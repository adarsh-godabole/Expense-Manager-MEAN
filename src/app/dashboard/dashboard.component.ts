import { Component, OnInit } from '@angular/core';

import { Expense } from '../expense'
import { ExpenseService } from '../expense.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private expenseservice:ExpenseService) { }

  expenses : Expense[]=[];
  recentExpenses : Expense[]=[];

  ngOnInit(): void {
    this.getExpense();
    
  }

  getExpense() {
    this.expenseservice.getExpenses().subscribe(
      expenses => {
        this.expenses = expenses;
        this.recentExpenses = Array.from(this.expenses);
        this.expenses.sort((a,b)=>b.amount-a.amount);
        this.recentExpenses.reverse();
    })
  }

}
