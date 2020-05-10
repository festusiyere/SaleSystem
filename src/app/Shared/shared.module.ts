import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotifierModule } from 'angular-notifier';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

import { NavbarComponent } from './navbar/navbar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { customNotifierOptions, progressBar } from './interfaces/notifier';
import { AddCommaPipe } from './pipes/add-comma.pipe';
import { DetailsDirective } from './directives/details.directive';


@NgModule({
  declarations: [
    AddCommaPipe,
    TopBarComponent,
    NavbarComponent,
    DetailsDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NotifierModule.withConfig(customNotifierOptions),
    NgProgressModule.withConfig(progressBar),
  ],
  exports: [
    CommonModule,
    TopBarComponent,
    NavbarComponent,
    FormsModule,
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
