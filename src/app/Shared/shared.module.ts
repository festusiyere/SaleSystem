import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotifierModule } from 'angular-notifier';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { customNotifierOptions, progressBar } from './interfaces/notifier';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { DiscountDirective } from '../directives/discount.directive';
import { AddCommaPipe } from './pipes/add-comma.pipe';
import { DetailsDirective } from '../SalesModule/Directives/details.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TopBarComponent,
    DiscountDirective,
    AddCommaPipe,
    DetailsDirective
  ],
  imports: [
    NotifierModule.withConfig(customNotifierOptions),
    NgProgressModule.withConfig(progressBar),
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    TopBarComponent,
    FormsModule,
    DiscountDirective,
    AddCommaPipe,
    HttpClientModule,
    NotifierModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    DetailsDirective
  ]
})

export class SharedModule { }
