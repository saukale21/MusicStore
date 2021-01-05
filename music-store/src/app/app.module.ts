import { ProductInfoComponent } from './../home/components/productinfo/productinfo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/components/home/home.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
