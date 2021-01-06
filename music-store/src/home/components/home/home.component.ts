import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { ProductsService } from '../../services/products.service';
import { RecommendedService } from '../../services/recommended.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<any> = []
  constructor(private productservice: ProductsService, private recommendedservice : RecommendedService) { }

  ngOnInit(): void {
    this.productservice.getRecommendedProducts().subscribe(res => {
       // console.log(res);
        
        for(var i=0;i<6;i++) {
          this.products.push(res.post[i]);
        }
        //this.recommendedservice.setProducts(this.products);
      },
        err => {
          console.log(err);
        })
  }

}
