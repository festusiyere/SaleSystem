import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'product', loadChildren: () => import('./ProductModule/product.module').then(m => m.ProductModule)},
  {path: 'sales', loadChildren: () => import('./SalesModule/sales.module').then(m => m.SalesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
