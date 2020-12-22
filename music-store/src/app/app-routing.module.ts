import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/components/home.component';
import { ProductInfoComponent } from 'src/home/components/productinfo.component';
import { ProductsComponent } from '../home/components/products.component';
import { CartComponent } from '../home/components/cart.component';
import { LoginComponent } from '../login/components/login.component';
import { SignupComponent } from '../login/components/signup.component';


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
