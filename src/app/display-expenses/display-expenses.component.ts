import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense'
 
@Component({
  selector: 'app-display-expenses',
  templateUrl: './display-expenses.component.html',
  styleUrls: ['./display-expenses.component.css']
})
export class DisplayExpensesComponent implements OnInit {

  @Input() expense?:Expense

  constructor() { }

  ngOnInit(): void {
  }

}
