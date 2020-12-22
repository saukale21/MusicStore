import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { BegineerComponent } from './components/begineer.component';
import { ProductInfoComponent } from './components/productinfo.component';
import { CartComponent } from './components/cart.component';
import { BlogsComponent } from './components/blogs.component';


@NgModule({
    imports: [CommonModule],
    exports: [
        HomeComponent,
        ProductsComponent,
        BegineerComponent,
        ProductInfoComponent,
        CartComponent,
        BlogsComponent
    ],
    declarations: [
        HomeComponent,
        ProductsComponent,
        BegineerComponent,
        ProductInfoComponent,
        CartComponent,
        BlogsComponent
    ],
    providers: [],
})
export class HomeModule { }
