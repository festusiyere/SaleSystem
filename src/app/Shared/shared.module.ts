import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../interfaces/notifier';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  exports: [
    FormsModule,
    NotifierModule
  ]
})

export class SharedModule { }
