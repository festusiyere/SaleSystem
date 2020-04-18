import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/Shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ProuctUpdateModalComponent } from '../product-stock-modal/modal.component';

@Component({
  selector: 'app-product-stocks',
  templateUrl: './product-stocks.component.html',
  styleUrls: ['./product-stocks.component.scss']
})
export class ProductStocksComponent implements OnInit {

  @ViewChild('modalcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  products: Product[] = [];

  constructor(private route: ActivatedRoute, private product: ProductService, private resolver: ComponentFactoryResolver,
              private notifier: NotifierService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.product.getAllProducts().subscribe(
      value => this.products = value
    );
  }

  createPopUp(): void {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ProuctUpdateModalComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.componentRef = componentRef;
    componentRef.instance.Products = this.products;
  }


}
