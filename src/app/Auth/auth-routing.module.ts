import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path: '', component: BaseAuthComponent, children: [
  //     { path: 'login', component: LoginComponent},
  //     {path: 'register', component: RegisterComponent}
  // ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
