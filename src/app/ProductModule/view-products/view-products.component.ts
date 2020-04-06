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
