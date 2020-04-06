import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../Shared/interfaces/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnDestroy {

  product: Product;
  id: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

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
    this.productService.getProduct(this.id).subscribe(
      value => {
        this.product = value;
      }
    );
  }
}
