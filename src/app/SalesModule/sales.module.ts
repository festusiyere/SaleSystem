import { NgModule } from '@angular/core';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    SalesRoutingModule
  ],
  declarations: [
    SalesComponent,
    SaleComponent,
  ],
})
export class SalesModule { }
