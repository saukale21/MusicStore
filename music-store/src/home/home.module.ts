import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { BegineerComponent } from './components/begineer.component';
import { ProductInfoComponent } from './components/productinfo.component';
import { CartComponent } from './components/cart.component';
import { BlogsComponent } from './components/blogs.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';


@NgModule({
    imports: [CommonModule],
    exports: [
        HomeComponent,
        ProductsComponent,
        BegineerComponent,
        ProductInfoComponent,
        CartComponent,
        BlogsComponent,
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HomeComponent,
        ProductsComponent,
        BegineerComponent,
        ProductInfoComponent,
        CartComponent,
        BlogsComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [],
})
export class HomeModule { }
