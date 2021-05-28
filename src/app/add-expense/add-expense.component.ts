import { Component, OnChanges, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';


import { Expense } from '../expense'
// import { EXPENSES } from '../expense-list'
import { ExpenseService } from '../expense.service';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  providers: [DatePipe]
})
export class AddExpenseComponent implements OnInit {

  expenses: Expense[] = [];
  selectedExpense?: Expense;
  myDate = new Date();
  totalExpense: number = 0;
  constructor(private expser: ExpenseService, private messageservice: MessageService, private datePipe: DatePipe) {

    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  // onSelect(expense: Expense): void {
  //   this.selectedExpense = expense;
  //   this.messageservice.add(`Selected Expense is ${expense.name}`);
  // }

  ngOnInit(): void {
    this.getExpences();



  }







  getExpences(): void {
    this.totalExpense=0;
    this.expser.getExpenses()
      .subscribe(expenses => {
        this.expenses = expenses;
        expenses.forEach(element => {
          this.totalExpense += element.amount
        });


      });

  }

  add(name1: string, amount1: string) {

    if (!name1 || !amount1 || Number(amount1) < 0) {
      window.alert("Please enter valid details!")
      return;
    }




    name1 = name1.trim();
    var myexp: Expense = {
      id: this.expenses.length + 1,
      name: name1,
      amount: Number(amount1),
      date: this.myDate
    }
    if (!myexp) { return; }

    this.expser.addExpense(myexp).subscribe(
      (expense) => {
        
        this.expenses.push(expense)
        this.getExpences();
      }

    )

  }

  delete(expense: Expense) {
    this.expenses = this.expenses.filter(e => e !== expense);
    this.expser.deleteExpense(expense.id).subscribe();

  }

  totalExpenditure() {
    this.expser.sum().subscribe(
      exp => this.expenses = exp

    );
  }

}
