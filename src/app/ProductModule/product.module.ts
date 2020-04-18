import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { BaseProductComponent } from './base-product/base-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductStocksComponent } from './product-stocks/product-stocks.component';
import { ProductStockComponent } from './product-stock/product-stock.component';
import { ModalComponent } from './modal/modal.component';
import { ProuctUpdateModalComponent } from './product-stock-modal/modal.component';


@NgModule({
  declarations: [
    BaseProductComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewProductsComponent,
    ProductStocksComponent,
    ProductStockComponent,
    ModalComponent,
    ProuctUpdateModalComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [
    ModalComponent,
    ProuctUpdateModalComponent
  ]
})
export class ProductModule { }
