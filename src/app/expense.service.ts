import { Injectable } from '@angular/core';
import { Expense } from './expense';
// import { EXPENSES } from './expense-list';
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private msgser:MessageService) { }

  getExpenses() : Observable<Expense[]>{
    
    return this.http.get<Expense[]>(this.Expenseurl)
    .pipe(
      catchError(this.handleError<Expense[]>('getExpenses', []))
    );
    
  }

  getExpense(id:Number) : Observable<Expense>{
    const url=`${this.Expenseurl}/${id}`;
    return this.http.get<Expense>(url).pipe(
      tap(_ => this.log(`fetched expense id ${id}`)),
      catchError(this.handleError<Expense>(`getExpense id ${id}`))
    );

      
  }

  updateExpense(expense:Expense):Observable<any> {
    return this.http.put(this.Expenseurl,expense,this.httpOptions)
  }

  addExpense(expense:Expense):Observable<any> {
    return this.http.post(this.Expenseurl,expense,this.httpOptions)
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

  //  updateExpense(expense:Expense) Observable<any>{
  //    return this.http.put(this.Expenseurl,expense,this.httpOptions).pipe
  //    (tap(_=> this.log(`updated hero id=${expense.id}`)),
  //    catchError(this.handleError<any>('updateExpense'))

  // }

  


}
