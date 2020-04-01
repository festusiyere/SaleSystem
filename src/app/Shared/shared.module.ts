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


@NgModule({
  declarations: [
    TopBarComponent,
    DiscountDirective,
   ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgProgressModule.withConfig(progressBar),
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  exports: [
    TopBarComponent,
    CommonModule,
    FormsModule,
    DiscountDirective,
    HttpClientModule,
    NotifierModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
  ]
})

export class SharedModule { }
