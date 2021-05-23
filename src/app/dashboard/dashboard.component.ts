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

  ngOnInit(): void {
    this.getExpense();
    
  }

  getExpense() {
    this.expenseservice.getExpenses().subscribe(
      expense => {
        this.expenses = expense.slice(1,2);
    })
  }

}
