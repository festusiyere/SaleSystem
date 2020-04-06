import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { BaseSaleComponent } from './base-sale/base-sale.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';


const routes: Routes = [
  {
    path: '', component: BaseSaleComponent, children: [
      {path: '', component: SalesComponent, pathMatch: 'full'},
      { path: 'view', component: ViewSalesComponent, pathMatch: 'full' },
      { path: 'view/:id', component: ViewSaleComponent, pathMatch: 'full' },

  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
