import { Injectable } from '@angular/core';
import { Product } from '../components/products/product';

@Injectable()
export class RecommendedService {
  recommendedProducts: Product;
  constructor() { }

  setProducts(data) {
    this.recommendedProducts = data;
    //console.log(this.recommendedProducts);
  }

  getProducts() {
    return this.recommendedProducts;
  }

}
