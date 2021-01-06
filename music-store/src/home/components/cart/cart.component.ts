import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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

  constructor() { 
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

  ngOnInit(): void {
  }

}
