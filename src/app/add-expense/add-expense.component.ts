import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense'
// import { EXPENSES } from '../expense-list'
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

  // onSelect(expense: Expense): void {
  //   this.selectedExpense = expense;
  //   this.messageservice.add(`Selected Expense is ${expense.name}`);
  // }

  ngOnInit(): void {
    this.getExpences();  
  }

  getExpences():void{
    this.expser.getExpenses()
        .subscribe(expenses => {
          this.expenses=expenses;
        });
  }

  add(name1:string,amount1:string) {
   

    name1 = name1.trim();
    var myexp : Expense = {
      id:this.expenses.length+1,
      name : name1,
      amount : Number(amount1)
    }
  if (!myexp) { return; }
   
  this.expser.addExpense(myexp).subscribe(
    expense => this.expenses.push(expense)
  )

  }

  delete(expense:Expense){
    this.expenses = this.expenses.filter(e=>e!==expense);
    this.expser.deleteExpense(expense.id).subscribe();

  }

}
