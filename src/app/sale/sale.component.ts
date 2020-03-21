import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit, AfterViewInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('disc', { static: false }) disc: NgForm;
  @ViewChild('qty', { static: false }) qty: NgForm;

  product: Product;
  discountSet: boolean;
  discount: number;
  quantity: number;
  total: number;
  discountPrice: number;

  dummy: Product = {
    name: 'Rice',
    details: 'Derika Rice 500kg made in thailand',
    cost: 5000,
    price: 5500,
    quantity: 20,
    unit: 'Bags',
    code: '1412-3482-8472-3'
  };


  constructor() { }

  ngOnInit(): void {
    this.setQuantity();
    this.setTotal();
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(
      () => {
        this.setTotal();
        this.discountCheck();
      }
    );
  }

  setTotal(): void {
    this.total = this.quantity * this.dummy.price;
  }

  setQuantity(): void  {
    if (this.dummy.quantity > 1) {
      this.quantity = 1;
    } else {
      this.quantity = 0;
    }
  }

  decrementCount(): void  {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  reset(): void {
    this.quantity = 1;
    this.discount = null;
  }

  incrementCount(): void  {
    if (this.quantity < this.dummy.quantity) {
      this.quantity++;
    }
  }

  qtyCheck(): void  {
    if (this.quantity > this.dummy.quantity) {
      this.quantity = this.dummy.quantity;
    }
  }

  blurCheck(): void{
    if(this.quantity == null){
      this.quantity = 1;
    }
  }

  discountCheck(): void  {
    if (this.discount > 100) {
      this.discount = 100;
    }
    if (this.discount < 0) {
      this.discount = 0;
    }
    if (this.discount != null) {
      this.discountPrice = this.dummy.price - (+(this.dummy.price * (this.discount / 100)).toFixed(2));
      this.discountSet = true;
    } else {
      this.discountSet = false;
    }
  }

  destroy() {
    console.log(this);
  }
}
