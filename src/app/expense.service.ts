import { Injectable } from '@angular/core';
import { Expense } from './expense'
import { EXPENSES } from './expense-list'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses() : Observable<Expense[]>{
    const expenses = of(EXPENSES); // returns an Observable that emits an single value//
    return expenses;
    console.log(EXPENSES)
  }
}
