import { NgModule } from '@angular/core';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from '../Shared/shared.module';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { BaseSaleComponent } from './base-sale/base-sale.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';


@NgModule({
  imports: [
    SharedModule,
    SalesRoutingModule,
  ],
  declarations: [
    SalesComponent,
    SaleComponent,
    ViewSalesComponent,
    BaseSaleComponent,
    ViewSaleComponent,
  ],
})
export class SalesModule { }
