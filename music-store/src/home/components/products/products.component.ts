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
  @Input() begineerproducts : Array<any>;
  @Input() selection : String;
  indianProducts: Array<any> = new Array();
  matSelect: any;
  productType: String;
  cart: Array<Product> = new Array();
  li: Product;
  constructor(private router: Router, private productservice: ProductsService, 
    private activated: ActivatedRoute, private recommendedservice : RecommendedService) {
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
  ngAfterViewChecked():void {
    console.log(this.products);
    //this.li = this.products;
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      this.productType = params.get('id');
    })
    if(this.productType == "indian"){
      //console.log("Indian");
      this.productservice.getProducts().subscribe(res=>{
        for(var i of res.post){
          if(i.sub_category == "Pungi" || i.sub_category == "Sarod" || i.sub_category == "Mayuri"
          || i.sub_category == "Bigul" || i.sub_category == "Ekkalam" || i.sub_category == "Pakhawaj"){
            this.indianProducts.push(i);
          }
        }
        //this.li = this.indianProducts;
      })
    }
    else {
      this.productservice.getProductByType(this.productType).subscribe(res => {
        this.li = res.post;
        // for (let pr of res.post) {
        //   console.log(pr.price);
        // }
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
