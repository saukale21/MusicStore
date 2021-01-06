import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/home/services/products.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  Imagepath: string;
  productInfo:Array<any> = [];
  id: String;
  data:any;
  res : any;
  constructor(private route: ActivatedRoute, private productservice: ProductsService) { }

  ngOnInit(): void
  {
    this.Imagepath = '../../assets/img/guitar3.jpg';
    this.id = this.route.snapshot.params['id'];
    this.getProductById();
    // console.log(this.id);
    // this.productservice.getProductById(this.id).subscribe(res =>
    // {
    //   this.res=res;
    //   console.log(this.res);

    // });
  }

  getProductById()
  {
      this.productservice.getProductById(this.id).subscribe(res =>{
        this.res=res;
        this.productInfo = res;
        console.log(this.productInfo[0].product);
        console.log(this.res);
      });
  }

  

  

}
