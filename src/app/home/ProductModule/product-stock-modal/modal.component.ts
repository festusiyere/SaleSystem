import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, ViewContainerRef, ComponentRef, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/Shared/interfaces/product';
import { NgModel, NgForm } from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product-update-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ProuctUpdateModalComponent implements OnInit, AfterViewInit {

  @Input() Products: Product[] = [];

  @ViewChild('modal', { static: true }) modal: ElementRef;

  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('id', { static: true }) id: NgModel;
  @ViewChild('name', { static: true }) name: NgModel;

  product: Product;

  oldProduct: Product;


  componentRef: ComponentRef<any>;

  constructor(private productService: ProductService, private router: Router, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.product = {
      id: null, name: null, details: null, cost: null, price: null, quantity: 0, unit: null
    };

  }

  ngAfterViewInit(): void {
    this.name.valueChanges.subscribe(
      value => {
        if (value) {
          const prod: Product = this.Products.find(a => a.id == value);
          this.oldProduct = prod;
          this.product.id = value;
          this.product.quantity = 1;
        }
      }
    );

  }

  @HostListener('click', ['$event.target'])
  onClick(event: any): void {
    if (event.classList.contains('modal-overlay')) {
      this.destroy();
    }
  }

  destroy(): void {
    this.componentRef.destroy();
  }

  decrementCount(): void {
    if (this.product.quantity && this.product.quantity >= 1) {
      this.product.quantity--;
    }
  }

  incrementCount(): void {
    if (this.product.quantity && this.product.quantity >= 1) {
      this.product.quantity++;
    }
  }

  blurCheck(event: NgModel): void {
    if (this.product.quantity <= 0) {
      this.product.quantity = 1;
    }
  }

  changePrice(event: any): void {
    if (event.checked) {
      this.product.price = this.oldProduct.price;
    } else {
      this.product.price = null;
    }
  }

  changeCost(event: any): void {
    if (event.checked) {
      this.product.cost = this.oldProduct.cost;
    } else {
      this.product.cost = null;
    }
  }

  onSubmit(): void {
    this.product.name = this.oldProduct.name;
    this.product.details = this.oldProduct.details;
    this.product.unit = this.oldProduct.unit;
    this.product.unique_id = this.oldProduct.unique_id;
    this.productService.updateProduct(this.product).subscribe(
      (res) => {
        this.notifier.notify('success', 'Product Stocked');
        this.destroy();
        this.router.navigate(['/', 'product', 'view']);
      }
    );
  }

}
