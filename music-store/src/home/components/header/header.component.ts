import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartLength:number;

  constructor() {

   }
  ngOnInit(): void {
    this.cartLength=0;
    if(localStorage.hasOwnProperty('ProductCategory')) {
      if(localStorage.getItem("ProductCategory").split(",")!=null)
      {
        this.cartLength=localStorage.getItem("ProductCategory").split(",").length;
      }
    }
    
  }
 

}
