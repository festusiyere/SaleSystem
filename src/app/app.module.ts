import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './Shared/shared.module';
import { HomeModule } from './Home/home.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BaseProfileComponent } from './base-profile/base-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BaseProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
