import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense'
import { EXPENSES } from '../expense-list'
import { ExpenseService } from '../expense.service';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenses : Expense[]=[];
  selectedExpense?:Expense;
  constructor(private expser : ExpenseService, private messageservice:MessageService) { }

  onSelect(expense: Expense): void {
    this.selectedExpense = expense;
    this.messageservice.add(`Selected Expense is ${expense.name}`);
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
