import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    // HomeComponent,
    // HomeRoutingModule,
    // DashboardComponent,
  ]
})
export class HomeModule { }
