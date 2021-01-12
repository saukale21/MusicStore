import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BegineerComponent } from './components/begineerpage/begineerpage.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductsService } from './services/products.service';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { RecommendedService } from './services/recommended.service';
import { BegineerService } from './services/begineer.service';
import { UserReviewService } from './services/user_review.service';
@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule, 
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    NgxImageZoomModule,
    MatMenuModule
  ],
  exports: [
    BegineerComponent,
    BlogsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ProductInfoComponent,
    ProductsComponent,
    TutorialComponent,
    HomeComponent

  ],
  declarations: [
    BegineerComponent,
    BlogsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    TutorialComponent,
    ProductInfoComponent,
    HomeComponent
  ],
  providers: [],
})
export class HomePageModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomePageModule,
      providers: [ProductsService,RecommendedService,BegineerService,UserReviewService]
    }
  }
}
