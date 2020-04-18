import { Component, OnInit } from '@angular/core';

import { SaleService } from '../services/sale.service';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.scss']
})
export class ViewSalesComponent implements OnInit {

  sales: ProductSale[] = [];
  currentPage: number;
  lastPage: number;
  nextPageUrl: string;
  prevPageUrl: string;
  total: number;
  pages: number[] = [];

  constructor(private saleService: SaleService) {
    this.currentPage = 1;
    this.getSale();
   }

  ngOnInit(): void {
  }

  getSale(): void{
    this.saleService.getPaginatedSale(this.currentPage).subscribe(
      (res: any) => {
        this.sales = res.data;
        this.total = res.total;
        for (let i = 1; i <= res.last_page; i++) {
          this.pages.push(i);
        }
        this.lastPage = res.last_page;
        this.currentPage = res.current_page;
        this.nextPageUrl = res.next_page_url;
        this.prevPageUrl = res.prev_page_url;
      }
    );
}

  setPage(num: number): void {
    if (this.currentPage !== num) {
      this.sales.length = 0;
      this.saleService.getPaginatedSale(num++).subscribe(
        (res: any) => {
          this.sales = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

  nextPage() {
    if (this.nextPageUrl != null) {
      this.sales.length = 0;
      console.log(this.currentPage, this.currentPage++);
      this.saleService.getPaginatedSale(this.currentPage++).subscribe(
        (res: any) => {
          this.sales = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

  prevPage() {
    if (this.prevPageUrl != null) {
      this.sales.length = 0;
      const val = this.currentPage - 1;
      this.saleService.getPaginatedSale(val).subscribe(
        (res: any) => {
          this.sales = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

}
