import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  Imagepath : string;
  constructor() { }

  ngOnInit(): void
  {
     this.Imagepath= '../../assets/img/guitar3.jpg';
  }
  
  

}
