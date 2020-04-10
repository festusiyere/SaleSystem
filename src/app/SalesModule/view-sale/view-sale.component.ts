import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductSale } from 'src/app/Shared/interfaces/productSale';
import { SaleService } from './../services/sale.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit, OnDestroy {

  sale: ProductSale;
  id: number;
  sub: Subscription;

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private route: ActivatedRoute, private saleService: SaleService, private resolver: ComponentFactoryResolver) { }

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

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.message = message;
    componentRef.instance.componentRef = componentRef;
  }

}
