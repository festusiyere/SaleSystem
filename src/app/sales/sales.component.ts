import {
  Component, OnInit, ViewChild, ElementRef, HostListener, ViewChildren,
  QueryList, AfterViewInit, ChangeDetectorRef, AfterContentChecked
} from '@angular/core';
import {  NgProgress } from 'ngx-progressbar';
import { NotifierService } from 'angular-notifier';

import { SaleComponent } from '../sale/sale.component';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { CartService } from './../services/cart.service';
import { Record, Details } from './../interfaces/record';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, AfterViewInit, AfterContentChecked {


  constructor(private product: ProductService, private cdr: ChangeDetectorRef, private cartService: CartService,
              private notifier: NotifierService, private progress: NgProgress) { }

  @ViewChild('sidetotal', { static: true }) total: ElementRef;
  @ViewChildren(SaleComponent) sales: QueryList<SaleComponent>;

  // Products from server
  products: Product[];

  // Styling properties for the component
  menuPosition: number;
  sticky = false;
  date: Date;

  // Grand Total
  grandTotal = 0.00;

  cartDetails: Cart[] = [];

  cart: number[] = [];
  numbers = 1;

  // Event Listener for Styling
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {

    // Gettin Current Date
    this.date = new Date();

    // Initializing a new cart component
    this.cart.push(this.numbers);

    // Getting the position for styling
    this.menuPosition = this.total.nativeElement.getBoundingClientRect().top;

    // API Call for Products
    this.product.getAllProducts().subscribe(
      (result) => {
        this.products = result;
      },
      (error) => {
        this.notifier.notify('error', error.message);
      }
    );

  }

  ngAfterViewInit(): void {
    this.cartService.addToCart.subscribe(
      (val) => {

        const item = this.cartDetails.find((value) => value.index === val.index);

        if (item === undefined) {
          this.cartDetails.push(val);
        } else {
          const index = this.cartDetails.indexOf(item);
          this.cartDetails.splice(index, 1, val);
        }
        this.sumTotal();
      }
    );
    this.cartService.deleteCart.subscribe(
      (a) => {
        this.deleteSale(a);
        this.sumTotal();
      }
    );
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  addSale() {
    this.numbers++;
    this.cart.push(this.numbers);
  }

  sumTotal(): void {
    if (!this.cartDetails.length) {
      this.grandTotal = 0.00;
    } else {
      this.grandTotal = this.cartDetails.reduce(((total, item) => item.total + total), 0);
    }
  }

  deleteSale(index: number): void {
    this.cartDetails.splice(index, 1);
    this.cart.splice(index, 1);
    this.sumTotal();
  }

  sell(): void {

    const detail = [];
    const array: any = this.cartDetails;

    for (const item of array) {
      const newData: any = new Object();
      newData.id = item.product.id;
      newData.name = item.product.name;
      newData.price = item.product.price;
      newData.quantity = item.quantity;
      newData.discount = item.discount === null ? 0 : item.discount;
      newData.total = item.total;
      detail.push(newData);
    }

    const data: Record = {
      details : detail,
      total: this.grandTotal
    }

    this.product.saveSale(data).subscribe(
      (result) => {
        this.showSuccessNotification('Sold');
        this.numbers = 1;
        this.cart.length = 1;
        this.cartDetails.length = 0;
        this.sumTotal();
      },
      (error) => {
        this.showErrorNotification(error.message);
      }
    );
  }

  public showSuccessNotification(message: string): void {
    this.notifier.notify('success', message);
  }

  public showErrorNotification(message: string): void {
    this.notifier.notify('error', message);
  }


}
