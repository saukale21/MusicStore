import { Injectable } from '@angular/core';
import { Product } from '../components/products/product';

@Injectable()
export class BegineerService {

  begineerProducts: Array<Product>;

  constructor() { }

  setProducts(data) {
    this.begineerProducts = data;
    //console.log(this.begineerProducts);
  }

  getProducts() {
    return this.begineerProducts;
  }

}
