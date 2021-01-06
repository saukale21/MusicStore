import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from './product';
import { RecommendedService } from '../../services/recommended.service';
import { environment } from '../../../environments/environment.prod';
import { LoginService } from '../../../login/services/login.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  @Input() products: Array<Product>;
  //@Input() recommended:Product;
  li: Array<Product>;
  @Input() begineerproducts: Array<Product>;
  @Input() selection: String;
  indianProducts: Array<Product> = new Array();
  matSelect: any;
  productType: String;
  category = [];
  name = [];
  image = [];
  price = [];
  imageurl = environment.URL;
  constructor(private router: Router, private productservice: ProductsService,
    private activated: ActivatedRoute, private recommendedservice: RecommendedService, private loginservice: LoginService) {

  }

  addtoCart(pr: Product) {
    if (this.loginservice.login == false) {
      this.loginservice.setURL(this.router.url);
      this.router.navigate(['/login']);
    }
    else {
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
    // console.log('call', sort);
    // this.sorting.length = 0;
    // for (let pr in sort) {
    //   if (sort[pr].price <= val.value) {
    //     console.log('hey', sort[pr]);
    //   }
    // }
    //this.li = this.sorting;
    //console.log('list sorted', this.li);
    // for (let pr in list) {
    //   if (list[pr].price <= val.value) {
    //     this.sort.image_paths = list[pr].image_paths;
    //     this.sort.price = list[pr].price;
    //   }
    // }
    // console.log('sorted', this.sort);
  }
  sortBy(event: MatSelectChange) {
    //console.log('hey');
    console.log(event);
  }
  ngAfterViewChecked(): void {
    if (this.products != undefined) {
      this.li = this.products;
    }
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      this.productType = params.get('id');
    })
    if (this.router.url.includes("/products/indian")) {
      //console.log("Indian");
      console.log(this.indianProducts.length);
      this.productservice.getProducts().subscribe(res => {
        for (var i of res.post) {
          if (i.sub_category == "Pungi" || i.sub_category == "Sarod" || i.sub_category == "Mayuri"
            || i.sub_category == "Bigul" || i.sub_category == "Ekkalam" || i.sub_category == "Pakhawaj") {
            this.indianProducts.push(i);
          }
        }
        this.li = this.indianProducts;
      })
    }
    else {
      this.productservice.getProductByType(this.productType).subscribe(res => {
        this.li = res.post;
      })
    }

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
