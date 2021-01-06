import { Component, OnInit } from '@angular/core';
import { env } from 'process';
import { Cart } from './cart';
import { environment } from '../../../environments/environment.prod';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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

  constructor(private productservice: ProductsService) { 
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

    }


    /*this.productlist=localStorage.getItem('ProductsCart').split("},");
    this.cartLength=this.productlist.length;

    //console.log(this.productlist)

    for(let i=0;i<this.productlist.length;i++)
    {
      this.category = this.productlist[i].split(',')[2];
      this.category = this.category.split(':')[1];

      this.product_name = this.productlist[i].split(',')[3];
      this.product_name = this.product_name.split(':')[1];

      this.image_path = this.productlist[i].split(',')[6];
      console.log(this.image_path)
      this.image_path = this.image_path.split(':')[1];

      this.price = this.productlist[i].split(',')[7];
      console.log(this.price);
      this.price = this.price.split(':')[1];

      //console.log(this.category)
      //console.log(this.product_name)
      //console.log(this.image_path)
      //console.log(this.price)
      this.cartProduct.push(new Cart(this.category,this.product_name,this.image_path,this.price));
      console.log(this.cartProduct)
    
    }*/

    console.log(this.cartProduct)

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
    })
  }
  ngOnInit(): void {
  }

}
