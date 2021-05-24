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
    const name = String(this.route.snapshot.paramMap.get('name'));
    console.log(name);
    
    this.expenseService.getExpense(name).subscribe(expense => this.expense=expense)
  }

  goBack(): void {
    this.location.back();
  }

}
