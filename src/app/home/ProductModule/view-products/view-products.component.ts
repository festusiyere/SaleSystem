import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];

    // Pagination Details
    currentPage: number;
    lastPage: number;
    nextPageUrl: string;
    prevPageUrl: string;
    total: number;
    pages: number[] = [];

  constructor(private product: ProductService) {
    this.currentPage = 1;
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.product.getPaginatedProducts(this.currentPage).subscribe(
      (res: any) => {
        this.products = res.data;
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
      this.products.length = 0;
      this.product.getPaginatedProducts(num++).subscribe(
        (res: any) => {
          this.products = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

  nextPage() {
    if (this.nextPageUrl != null) {
      this.products.length = 0;
      console.log(this.currentPage, this.currentPage++);
      this.product.getPaginatedProducts(this.currentPage++).subscribe(
        (res: any) => {
          this.products = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

  prevPage() {
    if (this.prevPageUrl != null) {
      this.products.length = 0;
      const val = this.currentPage - 1;
      this.product.getPaginatedProducts(val).subscribe(
        (res: any) => {
          this.products = res.data;
          this.currentPage = res.current_page;
          this.nextPageUrl = res.next_page_url;
          this.prevPageUrl = res.prev_page_url;
        }
      );
    }
  }

}
