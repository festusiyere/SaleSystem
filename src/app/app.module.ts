import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Shared/shared.module';

import { AppComponent } from './app.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './product/product.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SaleComponent } from './sale/sale.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeSaleComponent,
    NavbarComponent,
    HomeComponent,
    SalesComponent,
    ProductComponent,
    TopBarComponent,
    SaleComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
