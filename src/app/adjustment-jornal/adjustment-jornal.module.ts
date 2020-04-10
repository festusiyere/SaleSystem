import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjustmentJornalRoutingModule } from './adjustment-jornal-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { BaseAdjustmentComponent } from './base-adjustment/base-adjustment.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';


@NgModule({
  declarations: [BaseAdjustmentComponent, ViewSalesComponent, ViewSaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdjustmentJornalRoutingModule
  ]
})
export class AdjustmentJornalModule { }
