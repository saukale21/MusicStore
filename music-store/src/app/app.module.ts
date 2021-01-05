import { ProductInfoComponent } from './../home/components/productinfo/productinfo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { HomePageModule } from '../home/homepage.module';
import { HomeComponent } from '../home/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule.forRoot(),
    HomePageModule.forRoot(),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
