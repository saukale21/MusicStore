import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { ProductInfoComponent } from 'src/home/productinfo.component';
import { ProductsComponent } from '../home/products.component';
import { CartComponent } from '../home/cart.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../login/signup.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'productinfo',
    component: ProductInfoComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
