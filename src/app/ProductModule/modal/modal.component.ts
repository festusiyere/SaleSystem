import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, ViewContainerRef, ComponentRef } from '@angular/core';
import { Product } from 'src/app/Shared/interfaces/product';
import { NgModel } from '@angular/forms';
import { ProductService } from './../services/product.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal', { static: true }) modal: ElementRef;
  @ViewChild('id', { static: true }) id: NgModel;

  @Input() product: Product;

  componentRef: ComponentRef<any>;
  isSame = false;

  constructor(private productService: ProductService, private router: Router, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.inputCheck();
  }

  inputCheck() {
    this.id.valueChanges.subscribe(
      (changes) => {
        if (changes === this.product.unique_id) {
          this.isSame = true;
        } else {
          this.isSame = false;
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

  destroy(): void{
    this.componentRef.destroy();
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id).subscribe(
      () => {
        this.router.navigate(['/', 'product', 'view']);
        this.notifier.notify('success', 'Product Deleted');
      },
      (error) => {
        this.notifier.notify('error', 'An Error Occured');
        this.destroy();
      }
    );
  }

}
