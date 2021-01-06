import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartLength=localStorage.getItem("ProductCategory").split(",").length;
  constructor() { }

  ngOnInit(): void {
  }
 

}
