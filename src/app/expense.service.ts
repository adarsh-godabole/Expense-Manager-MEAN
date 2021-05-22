import { Injectable } from '@angular/core';
import { Expense } from './expense'
import { EXPENSES } from './expense-list'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses() : Expense[]{
    return EXPENSES
  }
}
