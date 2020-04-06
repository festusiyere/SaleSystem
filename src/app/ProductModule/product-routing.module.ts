import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { BaseProductComponent } from './base-product/base-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductStocksComponent } from './product-stocks/product-stocks.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {path: '', component: BaseProductComponent, children: [
    {path: 'add', component: AddProductComponent},
    {path: 'view', component: ViewProductsComponent},
    {path: 'view/:id', component: ViewProductComponent},
    {path: 'stocks', component: ProductStocksComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
