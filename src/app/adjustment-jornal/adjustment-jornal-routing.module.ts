import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseAdjustmentComponent } from './base-adjustment/base-adjustment.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';


const routes: Routes = [
  {
    path: '', component: BaseAdjustmentComponent, children: [
      {path: 'view', component: ViewSalesComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjustmentJornalRoutingModule { }
