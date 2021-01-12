import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from './product';
import { RecommendedService } from '../../services/recommended.service';
import { environment } from '../../../environments/environment.prod';
import { LoginService } from '../../../login/services/login.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() products: Array<Product>;
  productSubscription: Subscription;
  toggleBool: boolean = true;
  filter: Array<Product> = new Array();
  //@Input() recommended:Product;
  li: Array<Product> = new Array();
  @Input() begineerproducts: Array<Product>;
  indianProducts: Array<Product> = new Array();
  matSelect: any;
  productType: String;
  category = [];
  name = [];
  image = [];
  price = [];
  imageurl = environment.URL;
  list: Array<Product> = new Array();
  priceRange: number = 0;
  filters = [{ name: "Recommended Instruments", checked: false }, { name: "Beginners Instruments", checked: false }]
  // btn = document.querySelector('#filterbtn');
  constructor(private router: Router, private productservice: ProductsService,
    private activated: ActivatedRoute, private recommendedservice: RecommendedService, private loginservice: LoginService) {

  }

  addtoCart(pr: Product) {
    if (this.loginservice.login == false && localStorage.getItem('login') != "true") {
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

      //Name
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
  priceSort() {
    console.log(this.priceRange);
    this.li = this.list
    this.filter.length = 0;
    for (let pr in this.li) {
      if (this.li[pr].price <= this.priceRange) {
        this.filter.push(this.li[pr])
      }
    }
    this.li = this.filter;
  }
  sortBy(event: MatSelectChange) {

    if (event.value == 'low to high') {
      this.li.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.li = this.list;
    }
    if (event.value == 'high to low') {
      this.li.sort((a, b) => (a.price > b.price ? -1 : 1));
      this.li = this.list;
    }
  }

  changeEvent(event) {
    //console.log(event.name);
    if (event.checked) {
      this.toggleBool = false;

    }
    else {
      this.toggleBool = true;
    }
  }

  filterby() {

    //console.log(this.li);
    //this.list = this.li;
    this.li = this.list;
    this.filter.length = 0;
    if (this.filters[0].checked) {
      //console.log('r filter')
      for (let pr in this.li) {
        if (this.li[pr].product_recommended == true && this.filter.includes(this.li[pr]) == false) {
          this.filter.push(this.li[pr]);
        }
      }
    }
    if (this.filters[1].checked) {
      for (let pr in this.li) {
        if (this.li[pr].product_beginner == true && this.filter.includes(this.li[pr]) == false) {
          this.filter.push(this.li[pr]);
        }
      }
    }
    this.li = this.filter;
  }
  clearFilter() {
    this.li = this.list;
  }
  ngAfterViewChecked(): void {
    if (this.products != undefined) {
      this.li = this.products;
    }
    //console.log('beginners', this.begineerproducts);
    if (this.begineerproducts != undefined) {
      this.li = this.begineerproducts;
    }
  }
  ngOnInit(): void {

    this.activated.paramMap.subscribe(params => {
      this.productType = params.get('id');
    })

    if (this.router.url.includes("/products/indian")) {
      //console.log("Indian");
      console.log(this.indianProducts.length);
      this.productSubscription = this.productservice.getProducts().subscribe(res => {
        for (var i of res.post) {
          if (i.sub_category == "Pungi" || i.sub_category == "Sarod" || i.sub_category == "Mayuri"
            || i.sub_category == "Bigul" || i.sub_category == "Ekkalam" || i.sub_category == "Pakhawaj") {
            this.indianProducts.push(i);
          }
        }
        this.li = this.indianProducts;
        this.list = this.li
      })
    }
    else {
      this.productSubscription = this.productservice.getProductByType(this.productType).subscribe(res => {
        this.li = res.post;
        this.list = this.li;
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

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
