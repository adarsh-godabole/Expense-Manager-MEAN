import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './expense-list';
import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private Expenseurl = 'api/expenses';  // URL to web api

  constructor(private http: HttpClient, private msgser:MessageService) { }

  getExpenses() : Observable<Expense[]>{
    
    return this.http.get<Expense[]>(this.Expenseurl);
    console.log(EXPENSES)
  }

  getExpense(name:String) {
    const expense = EXPENSES.find(e=>e.name===name);
    this.msgser.add(`Fetched hero ${name}`);
    return of(expense)
  }

  private log(message: string) {
    this.msgser.add(`ExpenseService: ${message}`);
  }


}
