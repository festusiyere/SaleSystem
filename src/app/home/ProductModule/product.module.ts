import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { BaseProductComponent } from './base-product/base-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductStocksComponent } from './product-stocks/product-stocks.component';
import { ModalComponent } from './modal/modal.component';
import { ProuctUpdateModalComponent } from './product-stock-modal/modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';


@NgModule({
  declarations: [
    BaseProductComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewProductsComponent,
    ProductStocksComponent,
    ModalComponent,
    ProuctUpdateModalComponent,
    EditProductModalComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [
    ModalComponent,
    ProuctUpdateModalComponent,
    EditProductModalComponent
  ]
})
export class ProductModule { }
