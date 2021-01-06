import { Injectable } from '@angular/core';

@Injectable()
export class RecommendedService {
    recommendedProducts : Array<any> = [];
    constructor() { }

    setProducts(data) {
        this.recommendedProducts = data;
        //console.log(this.recommendedProducts);
    }

    getProducts() {
        return this.recommendedProducts;
    }

}