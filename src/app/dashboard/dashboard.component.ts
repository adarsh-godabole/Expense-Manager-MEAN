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

  FuelAmount: number = 0
  EntertainmentAmount: number = 0
  GrocerieslAmount: number = 0
  MedicineAmount: number = 0
  HouseholdeAmount: number = 0
  a = 10

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  Draw() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [
          'Fuel',
          'Entertainment',
          'Groceries',
          'Medicine',
          'Household'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [this.FuelAmount, this.EntertainmentAmount, this.GrocerieslAmount, this.MedicineAmount, this.HouseholdeAmount],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(25, 205, 86)',
            'rgb(255, 25, 86)'
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
        this.caluclateAmountpercategory();

      })
  }

  caluclateAmountpercategory() {
    // this.expenses.forEach(exp => console.log(exp))
    this.expenses.forEach(
      (exp) => {
        if (exp.category === "Groceries") {
          this.GrocerieslAmount += exp.amount;
        }
        if (exp.category === "Household") {
          this.HouseholdeAmount += exp.amount;
        }
        if (exp.category === "Fuel") {
          this.FuelAmount += exp.amount;
        }
        if (exp.category === "Entertainment") {
          this.EntertainmentAmount += exp.amount;
        }
        if (exp.category === "Medicine") {
          this.MedicineAmount += exp.amount;
        }

      }
    )
    console.log(this.EntertainmentAmount);

    this.Draw();
  }

}
