import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/home/services/products.service';
import { environment } from '../../../environments/environment.prod';
import { Product } from '../products/product';
import { LoginService } from '../../../login/services/login.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductInfoComponent implements OnInit {

  id: String;
  data: any;
  res: Product;

  category = [];
  name = [];
  image = [];
  price = [];
  imageurl = environment.URL;

  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductsService, private loginservice: LoginService) { }


  // Add to cart
  addtoCart(pr: Product) {

    if (this.loginservice.login == false) {
      this.loginservice.setURL(this.router.url);
      this.router.navigate(['/login']);
    }
    else {
      alert(pr.product_name + ' added to cart');

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



  ngOnInit(): void {
    //this.Imagepath = '../../assets/img/guitar3.jpg';
    this.id = this.route.snapshot.params['id'];
    // this.getProductById();
    console.log(this.id);
    this.productservice.getProductById(this.id).subscribe(res => {
      this.res = res.product;
    });

  }




}
