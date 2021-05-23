import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './expense-list';
import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private msgser:MessageService) { }

  getExpenses() : Observable<Expense[]>{
    const expenses = of(EXPENSES); // returns an Observable that emits an single value//
    this.msgser.add('Message Service fetched Expenses')
    return expenses;
    console.log(EXPENSES)
  }
}
