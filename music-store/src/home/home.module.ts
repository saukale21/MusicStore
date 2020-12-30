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



@NgModule({
    imports: [CommonModule, MatCardModule],
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
