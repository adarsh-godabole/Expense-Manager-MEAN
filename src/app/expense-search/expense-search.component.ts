import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-search',
  templateUrl: './expense-search.component.html',
  styleUrls: ['./expense-search.component.css']
})
export class ExpenseSearchComponent implements OnInit {

  expenses$!: Observable<Expense[]>;
  private searchTerms = new Subject<string>();

  constructor(private ExpenseService:ExpenseService) { }

  ngOnInit(): void {

    this.expenses$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.ExpenseService.searchExpense(term)),



    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  


}
