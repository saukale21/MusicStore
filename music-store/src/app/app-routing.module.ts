import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/components/home/home.component';
import { ProductsComponent } from '../home/components/products/products.component';
import { ProductInfoComponent } from '../home/components/productinfo/productinfo.component';
import { CartComponent } from '../home/components/cart/cart.component';
import { LoginComponent } from '../login/components/loginpage/loginpage.component';
import { SignupComponent } from '../login/components/signuppage/signuppage.component';
import { BegineerComponent } from '../home/components/begineerpage/begineerpage.component';
import { BlogsComponent } from '../home/components/blogs/blogs.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    //redirectTo: '/home',
    //pathMatch: 'full'
    component: HomeComponent

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductsComponent
  },
  {
    path: 'productinfo/:id',
    component: ProductInfoComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'begineer',
    component: BegineerComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
