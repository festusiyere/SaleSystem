import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


import { Product } from '../../Shared/interfaces/product';
import { ProductService } from '../services/product.service';
import { NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  progressRef: NgProgressRef;

  @ViewChild('form', { static: false }) form: NgForm;

  public units: string[] = [
    'Cartoon(s)', 'Bags', 'crates', 'piece(s)'
  ];

  public product: Product;

  constructor(private notifier: NotifierService, private productService: ProductService) {

  }

  ngOnInit(): void {}

  startLoading() {
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  onSubmit() {

    this.product = this.form.value;

    this.productService.saveProduct(this.product).subscribe(
      data => {
        this.showSuccessNotification('Product Created');
        this.form.reset();
      },
      error => {
        this.showErrorNotification('An Error Occured!');
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
