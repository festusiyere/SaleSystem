import { Component, OnInit, ViewChild, ElementRef, Input, ComponentRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { NotifierService } from 'angular-notifier';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';
import { SaleService } from '../services/sale.service';

@Component({
  selector: 'app-sales-reverse-modal',
  templateUrl: './sales-reverse-modal.component.html',
  styleUrls: ['./sales-reverse-modal.component.scss']
})
export class SalesReverseModalComponent implements OnInit {

  @ViewChild('modal', { static: true }) modal: ElementRef;
  @ViewChild('ref', { static: true }) ref: NgModel;

  @Input() sale: ProductSale;

  componentRef: ComponentRef<any>;
  isSame = false;

  constructor(private saleService: SaleService, private router: Router, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.inputCheck();
  }

  inputCheck() {
    this.ref.valueChanges.subscribe(
      (changes) => {
        if (changes === this.sale.ref_no) {
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

  reverseSale(): void {
    this.saleService.reverseSale(this.sale).subscribe(
      (res) => {
        this.destroy();
        this.router.navigate(['/', 'sales', 'view']);
        this.notifier.notify('success', res.message);
      },
      (error) => {
        this.notifier.notify('error', 'An Error Occured');
        this.destroy();
        this.router.navigate(['/', 'sales', 'view']);
      }
    );
  }

}
