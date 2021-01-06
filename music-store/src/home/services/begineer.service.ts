import { Injectable } from '@angular/core';

@Injectable()
export class BegineerService {
    
    begineerProducts : Array<any> = [];

    constructor() { } 

    setProducts(data) {
        this.begineerProducts = data;
        //console.log(this.begineerProducts);
    }

    getProducts() {
        return this.begineerProducts;
    }

}