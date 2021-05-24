import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './expense-list';
import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private Expenseurl = 'api/expenses';  // URL to web api

  constructor(private http: HttpClient, private msgser:MessageService) { }

  getExpenses() : Observable<Expense[]>{
    
    return this.http.get<Expense[]>(this.Expenseurl)
    .pipe(
      catchError(this.handleError<Expense[]>('getExpenses', []))
    );
    
  }

  getExpense(name:String) : Observable<Expense>{
    const url=`${this.Expenseurl}/${name}`;
    return this.http.get<Expense>(url).pipe(
      tap(_ => this.log(`fetched expense name ${name}`)),
      catchError(this.handleError<Expense>(`getExpense name ${name}`))
    );

      
  }

  private log(message: string) {
    this.msgser.add(`ExpenseService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
