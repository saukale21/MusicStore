import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ProductsService } from '../../services/products.service';
import { RecommendedService } from '../../services/recommended.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product>;
  recommended: Array<Product>;

  constructor(private productservice: ProductsService, private recommendedservice: RecommendedService) { }

  ngOnInit(): void {
    this.productservice.getRecommendedProducts().subscribe(res => {
      console.log(res);
      this.recommended = res;
      console.log('home', this.recommended);
      for (var i = 4; i < 12; i++) {
        this.products.push(res.post[i]);
      }
      console.log('products', this.products);
      this.recommendedservice.setProducts(this.products);
    },
      err => {
        console.log(err);
      })
  }

}
