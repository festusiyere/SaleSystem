import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../../Shared/interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart = new Subject<Cart>();
  deleteCart = new Subject<number>();

  constructor() { }
}
