import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


import { Product } from './../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;

  public units: string[] = [
    'Cartoon(s)', 'Bags', 'crates', 'piece(s)'
  ];

  public product: Product;

  constructor(private notifier: NotifierService, private productService: ProductService) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.product = this.form.value;
    this.product.cost = +(this.product.cost) as number;
    this.product.quantity = +(this.product.quantity) as number;
    this.productService.saveProduct(this.product).subscribe(
      data => {
        this.showSuccessNotification('Product Created');
        this.form.reset();
      },
      error => {
        this.showErrorNotification('An Error Occured');
        console.log(error);
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
