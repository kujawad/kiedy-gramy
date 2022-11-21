import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { QurlComponent } from './qurl/qurl.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";

@NgModule({
  declarations: [
    AppComponent,
    QurlComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
