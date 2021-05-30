import { Component, OnInit, ViewChild } from '@angular/core';

import { Expense } from '../expense'
import { ExpenseService } from '../expense.service'

import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],

          fill: true,
        }]
      }
    })
  }

  constructor(private expenseservice: ExpenseService) { }

  expenses: Expense[] = [];
  recentExpenses: Expense[] = [];

  ngOnInit(): void {
    this.getExpense();

  }

  getExpense() {
    this.expenseservice.getExpenses().subscribe(
      expenses => {
        this.expenses = expenses;
        this.recentExpenses = Array.from(this.expenses);
        this.expenses.sort((a, b) => b.amount - a.amount);
        this.recentExpenses.reverse();
      })
  }

}
