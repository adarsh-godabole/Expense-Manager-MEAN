import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExpenseService } from '../expense.service'
 
@Component({
  selector: 'app-display-expenses',
  templateUrl: './display-expenses.component.html',
  styleUrls: ['./display-expenses.component.css']
})
export class DisplayExpensesComponent implements OnInit {

  @Input() expense?:Expense

  constructor(private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location) { }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.expenseService.getExpense(id).subscribe(expense => this.expense=expense)
  }

  goBack(): void {
    this.location.back();
  }

  save () {
    if(this.expense)
    {
      this.expenseService.updateExpense(this.expense).
      subscribe(()=>this.goBack())
    }
  }

}
