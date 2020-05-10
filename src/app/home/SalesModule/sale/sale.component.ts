import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Product } from '../../../Shared/interfaces/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../../../Shared/interfaces/cart';
import { animateSale } from '../Animations/Animations';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
  animations: animateSale
})
export class SaleComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('name', { static: true }) name: NgModel;
  @ViewChild('disc', { static: true }) disc: NgModel;
  @ViewChild('qty', { static: true }) qty: NgModel;

  // Product Array passed from parent
  @Input() Products: Product[] = [];
  @Input() index: number;

  // Show Discounted Data
  toggle = false;


  // Actual Product Data
  selectedProduct: Product;
  productSet = false;


  // Dummy Product Data
  dummy: Product = {
    id: null,
    unique_id: null,
    name: null,
    details: 'Please Select Product',
    cost: 0,
    price: 0,
    quantity: 0,
    unit: 'Unit'
  };

  // Product Data Being Displayed
  product: Product;

  // Properties for computations
  discountSet: boolean;
  discount: number = null;
  quantity = 0;
  total: number;
  discountPrice: number;
  checked: boolean = false;


  constructor(private cartService: CartService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.Products = changes.Products.currentValue || null;
  }

  ngOnInit(): void {

    // setting the initial product to the dummy product
    this.product = this.dummy;
    this.setQuantity();
    this.setTotal();

    this.cartService.check.subscribe(
      (val) => this.checked = val
    );

    // Subscribing for the change in product so as to populate the fields
    this.name.valueChanges.subscribe(
      (changes) => {
        if (changes !== null) {

          // if the change contains a value
          const list = this.Products;
          const index: number = +changes;

          // Setting Product to True and finding the Object with the id of the selected produt
          this.productSet = true;
          const result = list.find((word) => word.id === index);

          // Setting the result to be the Product
          this.product = result;

          // Setting the result and Quantity
          this.setQuantity();
          this.setTotal();

        } else {
          this.productSet = false;
          this.product = this.dummy;
        }
      }
    );

    this.disc.valueChanges.subscribe(
      () => {
        this.setTotal();
        this.discountCheck();
      }
    );

    this.qty.valueChanges.subscribe(
      () => {
        this.setTotal();
        this.discountCheck();
      }
    );

  }

  ngAfterViewInit(): void {
  }

  setTotal(): void {
    if (this.productSet) {
      if (this.discountSet) {
        this.total = this.quantity * this.discountPrice;
      } else {
        this.total = this.quantity * this.product.price;
      }
      const value: Cart = {index: this.index, product: this.product, quantity: this.quantity, discount: this.discount, total: this.total };
      if (this.productSet) {
        this.cartService.addToCart.next(value);
      }
    } else {
      this.total = 0;
    }
  }

  setQuantity(): void {
    if (this.product.quantity > 1) {
      this.quantity = 1;
    } else {
      this.quantity = 0;
    }
  }

  decrementCount(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  reset(): void {
    if (this.productSet) {
      if (this.product.quantity == 0) {
      this.discount = null;
      } else {
        this.quantity = 1;
        this.discount = null;
      }
    }
  }

  incrementCount(): void {
    if (this.quantity < this.product.quantity) {
      this.quantity++;
    }
  }

  qtyCheck(): void {
    this.setTotal();
    if (this.quantity > this.product.quantity) {
      this.quantity = this.product.quantity;
    }
  }

  blurCheck(): void {
    if (this.productSet) {
      if (this.quantity == null) {
        this.quantity = 1;
      }
    } else {
      this.quantity = 0;
    }
  }

  discountCheck(): void {
    if (this.productSet) {
      if (this.discount > 100) {
        this.discount = 100;
      }
      if (this.discount < 0) {
        this.discount = 0;
      }
      if (this.discount != null) {
        this.discountPrice = this.product.price - (+(this.product.price * (this.discount / 100)).toFixed(2));
        this.discountSet = true;
        this.setTotal();
      } else {
        this.discountSet = false;
        this.setTotal();
      }
    }
  }

  remove() {
    this.cartService.deleteCart.next(this.index);
  }
}
