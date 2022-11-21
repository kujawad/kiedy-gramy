import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', component: AuthComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'authorized', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
