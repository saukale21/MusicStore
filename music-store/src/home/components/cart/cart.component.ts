import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { environment } from '../../../environments/environment.prod';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserReviewService } from '../../services/user_review.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  validatingForm: FormGroup;
  imageurl = environment.URL;
  cartLength:number;
  categoryList=[];
  nameList=[];
  imageList=[];
  priceList=[]
  cartProduct=[];
  product_name:string;
  image_path:string;
  price:string;
  category:string;
  review:string;

  constructor(private productservice: ProductsService, private router: Router, private reviewservice: UserReviewService) { 
    if(localStorage.getItem('ProductCategory')!=null && localStorage.getItem('ProductName')!=null
    && localStorage.getItem('ProductImage')!=null  && localStorage.getItem('ProductPrice')!=null ) 
  {

    this.categoryList=localStorage.getItem('ProductCategory').split(",");
    this.nameList=localStorage.getItem('ProductName').split(",");
    this.imageList=localStorage.getItem('ProductImage').split(",");
    this.priceList=localStorage.getItem('ProductPrice').split(",");
    this.cartLength=this.categoryList.length;
  }
  

    for(let i=0;i<this.cartLength;i++)
    {
      if(i==0 && i==this.cartLength-1)
      {

        this.category=this.categoryList[i].split("[")[1];
        this.product_name=this.nameList[i].split("[")[1];
        this.image_path=this.imageList[i].split("[")[1];
        this.price=this.priceList[i].split("[")[1];

        this.category=this.category.split("]")[0];
        this.product_name=this.product_name.split("]")[0];
        this.image_path=this.image_path.split("]")[0];
        this.price=this.price.split("]")[0];
           
  
      }
      else if(i==0 && i!=this.cartLength-1)
      {

        this.category=this.categoryList[i].split("[")[1];
        this.product_name=this.nameList[i].split("[")[1];
        this.image_path=this.imageList[i].split("[")[1];
        this.price=this.priceList[i].split("[")[1];
      }


      else if(i==this.cartLength-1)
      {
        this.category=this.categoryList[i].split("]")[0];
        this.product_name=this.nameList[i].split("]")[0];
        this.image_path=this.imageList[i].split("]")[0];
        this.price=this.priceList[i].split("]")[0];
  
      }

      else
      {
        this.category=this.categoryList[i];
        this.product_name=this.nameList[i];
        this.image_path=this.imageList[i];
        this.price=this.priceList[i];
      }

      this.cartProduct.push(new Cart(this.category,this.product_name,this.image_path,this.price));
      if(this.cartProduct[0].product_name == "") {
        this.cartProduct = [];
      }

    }

    console.log(this.cartProduct)

  }

  //Trackby
  trackByCartProduct(index:number , cartProduct:any): string {
    return cartProduct.product_name;

  }

  totalPrice() {
    let price = 0;
      for(var i of this.cartProduct) {
        price += (i.price)*(i.quantity);
      }
      return price;
  }
  increment(name) {
    for(var i = 0;i<this.cartProduct.length;i++) {
      if(this.cartProduct[i].product_name == name){
        this.cartProduct[i].quantity += 1;
    }
    }
  }
  decrement(name) {
    for(var i = 0;i<this.cartProduct.length;i++) {
      if(this.cartProduct[i].product_name == name){
        if(this.cartProduct[i].quantity != 1) 
        this.cartProduct[i].quantity -= 1;
    }
    }
  }
  removeItem(name) {
    var index = 0;
    for(var i = 0;i<this.cartProduct.length;i++) {
      if(this.cartProduct[i].product_name == name){
        index = i;
    }
  }
    this.cartProduct.splice(index,1);
    console.log(this.cartProduct);
    console.log("Removed");
    //changes
    var obj = JSON.parse(localStorage.getItem('ProductName'));
    obj.splice(index,1);
    console.log(obj);
    localStorage.setItem('ProductName',JSON.stringify(obj));

    var obj1 = JSON.parse(localStorage.getItem('ProductImage'));
    obj1.splice(index,1);
    console.log(obj1);
    localStorage.setItem('ProductImage',JSON.stringify(obj1));

    var obj2 = JSON.parse(localStorage.getItem('ProductPrice'));
    obj2.splice(index,1);
    console.log(obj2);
    localStorage.setItem('ProductPrice',JSON.stringify(obj2));

    var obj3 = JSON.parse(localStorage.getItem('ProductCategory'));
    obj3.splice(index,1);
    console.log(obj3);
    localStorage.setItem('ProductCategory',JSON.stringify(obj3));

  }
  checkout() {
    let body = {
      "product_details": [],
      "total_price": 0
    };
    let arr : Array<any> = new Array();
    for(var i = 0;i<this.cartProduct.length;i++) {
      arr.push({});
      arr[i].product_name = this.cartProduct[i].product_name;
      arr[i].product_quantity = this.cartProduct[i].quantity;
      arr[i].product_price = this.cartProduct[i].price;
    }
    body.product_details = arr;
    body.total_price = this.totalPrice();
    let data = JSON.stringify(body);
    console.log(body);
    this.productservice.saveOrder(data).subscribe(res=>{
      console.log(res);
      alert('Order Placed Successfully! Shop More!');
      this.cartProduct = [];
      localStorage.setItem('ProductName','[]');
      localStorage.setItem('ProductCategory','[]');
      localStorage.setItem('ProductPrice','[]');
      localStorage.setItem('ProductImage','[]');
    },
    err=>{
      alert("You are logged out. Please login again and checkout");
      this.router.navigate(['/login']);
    })
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      contactFormModalMessage: new FormControl('', Validators.required),
      contactFormModalRating: new FormControl('', Validators.required)
    });
    this.reviewservice.getToken()
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
  get contactFormModalRating() {
    return this.validatingForm.get('contactFormModalRating');
  }

  onSubmit() {
    console.log(this.contactFormModalMessage.value);
    console.log(this.contactFormModalRating.value);
    var obj;
    let localItem = localStorage.getItem('googleLogin');
      if(localItem == "true"){
        obj = {
          "rating": this.contactFormModalRating.value,
          "description": this.contactFormModalMessage.value,
          token:localStorage.getItem('googleToken'),

        };
        alert("Cart google");


      }else {
        obj = {
          "rating": this.contactFormModalRating.value,
          "description": this.contactFormModalMessage.value
        };
        alert("Cart normal");

      }
      this.reviewservice.postUserReview(obj).subscribe(res=>{
        console.log(res);
      });
      



  }

}

