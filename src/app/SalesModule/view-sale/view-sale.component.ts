import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';
import { SaleService } from './../services/sale.service';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit, OnDestroy {

  sale: ProductSale;
  id: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private saleService: SaleService) { }

  ngOnInit(): void {
    this.getId();
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getId() {
    this.sub = this.route.paramMap.subscribe(
      value => {
        this.id = +value.get('id');
      }
    );
  }

  getProduct() {
    this.saleService.getSale(this.id).subscribe(
      value => {
        this.sale = value;
      }
    );
  }

}
