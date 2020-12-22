import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { BegineerComponent } from './begineer.component';
import { ProductInfoComponent } from './productinfo.component';
import { CartComponent } from './cart.component';
import { BlogsComponent } from './blogs.component';


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
