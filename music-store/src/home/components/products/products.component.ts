import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from './product';
import { RecommendedService } from '../../services/recommended.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  @Input() products : Array<any>;
  matSelect: any;
  productType: String;
  category= [];
  name=[];
  image=[];
  price=[];
  li: Product;
  constructor(private router: Router, private productservice: ProductsService, 
    private activated: ActivatedRoute, private recommendedservice : RecommendedService) {
     // console.log(this.products);
  }

  addtoCart(pr: Product) {
    alert(pr.product_name + ' added to cart');
    /*if (localStorage.hasOwnProperty('ProductsCart')) {
      this.cart = JSON.parse(localStorage.getItem("ProductsCart"));
      this.cart.push(pr);
      localStorage.setItem("ProductsCart", JSON.stringify(this.cart));
    }
    else {
      this.cart.push(pr);
      localStorage.setItem("ProductsCart", JSON.stringify(this.cart));
    }*/


    //category
    if (localStorage.hasOwnProperty('ProductCategory')) {
      this.category = JSON.parse(localStorage.getItem("ProductCategory"));
      this.category.push(pr.sub_category);
      localStorage.setItem("ProductCategory", JSON.stringify(this.category));
    }
    else {
      this.category.push(pr.sub_category);
      localStorage.setItem("ProductCategory", JSON.stringify(this.category));
    }

    //Nam
    if (localStorage.hasOwnProperty('ProductName')) {
      this.name = JSON.parse(localStorage.getItem("ProductName"));
      this.name.push(pr.product_name);
      localStorage.setItem("ProductName", JSON.stringify(this.name));
    }
    else {
      this.name.push(pr.product_name);
      localStorage.setItem("ProductName", JSON.stringify(this.name));
    }

    //image path
    if (localStorage.hasOwnProperty('ProductImage')) {
      this.image = JSON.parse(localStorage.getItem("ProductImage"));
      this.image.push(pr.image_paths);
      localStorage.setItem("ProductImage", JSON.stringify(this.image));
    }
    else {
      this.image.push(pr.image_paths);
      localStorage.setItem("ProductImage", JSON.stringify(this.image));
    }

    //price
    if (localStorage.hasOwnProperty('ProductPrice')) {
      this.price = JSON.parse(localStorage.getItem("ProductPrice"));
      this.price.push(pr.price);
      localStorage.setItem("ProductPrice", JSON.stringify(this.price));
    }
    else {
      this.price.push(pr.price);
      localStorage.setItem("ProductPrice", JSON.stringify(this.price));
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
  ngAfterViewChecked():void {
    console.log(this.products);
    //this.li = this.products;
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      this.productType = params.get('id');
    })
    this.productservice.getProductByType(this.productType).subscribe(res => {
      //console.log(res);
      this.li = res.post;
      // for (let pr of res.post) {
      //   console.log(pr.price);
      // }
    })
    // if(this.router.url == 'http://localhost:4200') {
    //   let prods = this.recommendedservice.getProducts();
    //   console.log(prods);
    // }

    // this.productservice.getProducts().subscribe(res => {
    //   console.log(res);
    // },
    //   err => {
    //     console.log(err);
    //   })
  }

}
