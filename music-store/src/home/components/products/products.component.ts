import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  matSelect: any;
  productType: String;
  cart: Array<Product> = new Array();
  li: Product;
  constructor(private router: Router, private productservice: ProductsService, private activated: ActivatedRoute) {

  }
  addtoCart(pr: Product) {
    alert(pr.product_name + ' added to cart');
    if (localStorage.hasOwnProperty('ProductsCart')) {
      this.cart = JSON.parse(localStorage.getItem("ProductsCart"));
      this.cart.push(pr);
      localStorage.setItem("ProductsCart", JSON.stringify(this.cart));
    }
    else {
      this.cart.push(pr);
      localStorage.setItem("ProductsCart", JSON.stringify(this.cart));
    }
  }

  isProductRoute() {
    if (this.router.url.includes("/products")) {
      return true;
    }
    else {
      return false;
    }
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  priceSort(val) {
    console.log(val.value);
  }
  sortBy(event: MatSelectChange) {
    //console.log('hey');
    console.log(event);
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      //console.log(params);
      this.productType = params.get('id');
    })
    this.productservice.getProductByType(this.productType).subscribe(res => {
      console.log(res);
      this.li = res.post;
      // for (let pr of res.post) {
      //   console.log(pr.price);
      // }
    })

    this.productservice.getProducts().subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      })
  }

}
