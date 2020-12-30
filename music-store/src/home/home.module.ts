import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BegineerComponent } from './components/begineerpage/begineerpage.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductInfoComponent } from './components/productinfo/productinfo.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [CommonModule, MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  exports: [
    BegineerComponent,
    BlogsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductInfoComponent,
    ProductsComponent,

  ],
  declarations: [
    BegineerComponent,
    BlogsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductInfoComponent
  ],
  providers: [],
})
export class HomeModule { }
