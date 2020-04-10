import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/Shared/interfaces/product';

@Component({
  selector: 'app-product-stocks',
  templateUrl: './product-stocks.component.html',
  styleUrls: ['./product-stocks.component.scss']
})
export class ProductStocksComponent implements OnInit {

  products: Product[] = [];

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.product.getAllProducts().subscribe(
      value => this.products = value
    );
  }

}
