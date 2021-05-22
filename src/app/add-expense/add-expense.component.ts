import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense'
import { EXPENSES } from '../expense-list'

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenses = EXPENSES;
  selectedExpense?:Expense;
  constructor() { }

  onSelect(hero: Expense): void {
    this.selectedExpense = hero;
  }

  ngOnInit(): void {
  }

}
