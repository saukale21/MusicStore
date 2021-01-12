import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ProductsService } from '../../services/products.service';
import { RecommendedService } from '../../services/recommended.service';
import { Product } from '../products/product';
import { UserReviewService } from '../../services/user_review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<Product> = new Array();
  recommended: Array<Product>;
  review: Array<any> = new Array();

  constructor(private productservice: ProductsService, private recommendedservice: RecommendedService, private reviewservice: UserReviewService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("hii");
    this.route.queryParams.subscribe(params=>{
      console.log("Query",params['token']);
      localStorage.setItem("googleToken",'');
      localStorage.setItem("googleToken",params['token']);
    })

    this.productservice.getRecommendedProducts().subscribe(res => {
      console.log(res);
      this.recommended = res;
      console.log('home', this.recommended);
      for (var i = 4; i < 12; i++) {
        this.products.push(res.post[i]);
      }
      console.log('products', this.products);
      this.recommendedservice.setProducts(this.products);
    },
      err => {
        console.log(err);
      })

      this.reviewservice.getUserReview().subscribe(res=>{
        console.log(res.post);
        this.review = res.post;
        console.log(this.review)
      })
  }

}
