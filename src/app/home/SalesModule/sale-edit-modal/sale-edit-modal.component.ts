import { Component, OnInit, ViewChild, ElementRef, Input, ComponentRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';
import { SaleService } from '../services/sale.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sale-edit-modal',
  templateUrl: './sale-edit-modal.component.html',
  styleUrls: ['./sale-edit-modal.component.scss']
})
export class SaleEditModalComponent implements OnInit {

  @ViewChild('modal', { static: true }) modal: ElementRef;
  @ViewChild('qty', { read: ElementRef }) qty: ElementRef;
  @ViewChild('form', { static: true }) form: NgForm;

  @Input() sale: ProductSale;

  editedSale: ProductSale;

  componentRef: ComponentRef<any>;

  constructor(private saleService: SaleService, private router: Router, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.editedSale = JSON.parse(JSON.stringify(this.sale)) ;
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

  discountCheck(index: number): void {
    if (this.editedSale.details[index].discount > 100) {
      this.editedSale.details[index].discount = 100;
      this.setSubTotal(index);
    }
    if (this.editedSale.details[index].discount < 0) {
      this.editedSale.details[index].discount = 1;
      this.setSubTotal(index);
    }

    this.setSubTotal(index);

  }

  decrementCount(index: number): void {
    if (this.editedSale.details[index].quantity > 1) {
      this.qty.nativeElement.focus();
      this.editedSale.details[index].quantity--;
    }
    this.setSubTotal(index);
  }

  incrementCount(index: number): void {
    this.qty.nativeElement.focus();
    this.editedSale.details[index].quantity++;
    this.setSubTotal(index);
  }

  blurCheck(index: number): void {
    if (this.editedSale.details[index].quantity < 1) {
      this.editedSale.details[index].quantity  = 1;
    }
    this.setSubTotal(index);
  }

  setSubTotal(index: number): void {

    if (this.editedSale.details[index].discount > 0) {
      this.editedSale.details[index].total =
        (this.editedSale.details[index].price -
        (+(this.editedSale.details[index].price *
            (this.editedSale.details[index].discount / 100)).toFixed(2)))
        * this.editedSale.details[index].quantity;
      this.setTotal();
    } else {
      this.editedSale.details[index].total = this.editedSale.details[index].quantity * this.editedSale.details[index].price;
      this.setTotal();
    }
  }

  setTotal(): void {
    this.editedSale.total = this.editedSale.details.reduce(((acc, ind) => ind.total + acc), 0);
  }

  remove(index: number): void {
    this.editedSale.details.splice(index, 1);
    this.setTotal();
  }

  updateSale(): void {
    const arr = new Array(this.sale, this.editedSale);

    this.saleService.updateSale(arr).subscribe(
      res => {
        this.destroy();
        this.router.navigate(['/', 'sales', 'view']);
        this.notifier.notify('success', res.message);

      },
      err => {
        this.destroy();
        this.router.navigate(['/', 'sales', 'view']);
        this.notifier.notify('success', err.message.message);
      }
    );
  }

}
