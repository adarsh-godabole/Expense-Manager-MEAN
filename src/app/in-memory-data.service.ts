import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
      { id: 1, name: 'Movie', amount: 500 },
      { id: 2, name: 'Groceries', amount: 900 },
      { id: 3 ,name: 'Fuel', amount: 2000 }
     
     
    ];
    return {expenses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(expenses: Expense[]): number {
    return expenses.length > 0 ? Math.max(...expenses.map(expense => expense.id)) + 1 : 11;
  }
}