import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { BaseAuthComponent } from './auth/base-auth/base-auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', component: DashboardComponent}
    ]
  },
  {
    path: '', component: BaseAuthComponent, children: [
      { path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
