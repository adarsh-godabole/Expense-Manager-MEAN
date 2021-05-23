import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense'
import { EXPENSES } from '../expense-list'
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenses : Expense[]=[];
  selectedExpense?:Expense;
  constructor(private expser : ExpenseService) { }

  onSelect(hero: Expense): void {
    this.selectedExpense = hero;
  }

  ngOnInit(): void {
    this.getExpences();
  }

  getExpences():void{
    this.expser.getExpenses()
        .subscribe(expenses => {
          this.expenses=expenses;
        });
  }

}
