import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../Shared/interfaces/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ModalComponent } from '../modal/modal.component';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit, OnDestroy {

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  product: Product;
  id: number;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService, private resolver: ComponentFactoryResolver,
              private notifier: NotifierService) { }

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

  editProduct() {
    
  }

  getProduct() {
    this.productService.getProduct(this.id).subscribe(
      value => {
        this.product = value;
      }
    );
  }

  deletPopUp(): void{
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.product = this.product;
    componentRef.instance.componentRef = componentRef;
  }
}
