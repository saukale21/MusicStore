import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  li: Array<Products>
  matSelect: any;
  rout: String;
  constructor(data: ProductDataService, private router: Router) {
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
  }

}
