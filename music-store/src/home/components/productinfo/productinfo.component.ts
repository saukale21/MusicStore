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
  id: String;
  constructor(private route: ActivatedRoute, private productservice: ProductsService) { }

  ngOnInit(): void {
    this.Imagepath = '../../assets/img/guitar3.jpg';
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productservice.getProductById(this.id).subscribe(res => {
      console.log(res);
    });
  }



}
