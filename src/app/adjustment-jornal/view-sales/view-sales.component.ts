import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/SalesModule/services/sale.service';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.scss']
})
export class ViewSalesComponent implements OnInit {

  sales: ProductSale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getSale();
  }

  getSale(): void{
    this.saleService.getSales().subscribe(
      (value) => {
        this.sales = value;
      }
    );
  }

}
