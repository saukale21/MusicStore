import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Products } from 'src/app/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  li: Array<Products>
  matSelect: any;
  rout: String;
  productType: String
  constructor(data: ProductDataService, private router: Router,private productservice: ProductsService,private activated: ActivatedRoute) {
    this.li = data.getli();
    this.rout = router.url;
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

  ngOnInit(): void {
    this.activated.paramMap.subscribe(params=>{
      //console.log(params);
      this.productType = params.get('id'); 
    })
    this.productservice.getProductByType(this.productType).subscribe(res=>{
      console.log(res);
    })

    this.productservice.getProducts().subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    })
  }

}
