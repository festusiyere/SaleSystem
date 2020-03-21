import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  input

  date: Date;

  cart: number[] = [];
  numbers = 1;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    this.cart.push(this.numbers);
  }

  addSale() {
    this.numbers++;
    this.cart.push(this.numbers);
    console.log(this.cart);
  }

}
