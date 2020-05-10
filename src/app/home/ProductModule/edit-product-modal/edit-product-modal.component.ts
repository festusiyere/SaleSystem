import { Component, OnInit, ViewChild, ElementRef, ComponentRef, HostListener } from '@angular/core';

import { Product } from 'src/app/Shared/interfaces/product';
import { NgForm, NgModel } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {

  @ViewChild('modal', { static: true }) modal: ElementRef;

  @ViewChild('form', { static: true }) form: NgForm;
  @ViewChild('id', { static: true }) id: NgModel;
  @ViewChild('name', { static: true }) name: NgModel;

  product: Product;

  oldProduct: Product;


  componentRef: ComponentRef<any>;

  constructor(private productService: ProductService, private router: Router, private notifier: NotifierService) { }

  ngOnInit(): void {

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

  onSubmit(): void {
    this.productService.EditProduct(this.product).subscribe(
      (res) => {
        this.notifier.notify('success', 'Product Updated');
        this.destroy();
        this.router.navigate(['/', 'product', 'view']);
      }
    );
  }

}
