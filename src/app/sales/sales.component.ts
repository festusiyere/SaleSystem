import {
  Component, OnInit, ViewChild, ElementRef, HostListener, ViewChildren,
  QueryList, AfterViewInit, ChangeDetectorRef, AfterContentChecked
} from '@angular/core';
import { SaleComponent } from '../sale/sale.component';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { CartService } from './../services/cart.service';
import { Record } from './../interfaces/record';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, AfterViewInit, AfterContentChecked {


  constructor(private product: ProductService, private cdr: ChangeDetectorRef, private cartService: CartService) { }

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
      (error) => console.log(error)
    );

  }

  ngAfterViewInit(): void {
    this.cartService.addToCart.subscribe(
      (val) => {
        console.log(val);
        const item = this.cartDetails.find((value) => value.index === val.index);
        if (item === undefined) {
          this.cartDetails.push(val);
        } else {
          this.cartDetails.splice(val.index, 1, val);
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
    console.log(this.cartDetails);
    const a = {
      details: [
          {
              product: 'Rice',
              price: 300
          },
          {
              product: 'Beans',
              price: 200
          },
          {
              product: 'Yam',
              price: 800
          }
      ],
      total: 50000,
    };

    // this.product.saveSale(a).subscribe(
    //   (result) => console.log(result)
    // );
  }

}
