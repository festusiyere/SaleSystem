import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart = new Subject<Cart>();
  deleteCart = new Subject<number>();

  constructor() { }

  console() {
    // this.addToCart.next('hello');
  }
}
