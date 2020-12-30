import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {


  li: Array<Products>
  constructor() {
    this.li = new Array<Products>();
    let l1 = new Products(101, 'Casio Privia PX-870 88 Key Digital Piano', 17000, '/assets/img/p1.png');
    let l2 = new Products(102, 'Casio Privia PX-870 88 Key Digital Piano', 9000, '/assets/img/p2.jpg');
    let l3 = new Products(103, 'Casio Privia PX-870 88 Key Digital Piano', 20000, '/assets/img/p4.jpg');
    let l4 = new Products(104, 'Casio Privia PX-870 88 Key Digital Piano', 25000, '/assets/img/p3.jpg');
    let l5 = new Products(101, 'Casio Privia PX-870 88 Key Digital Piano', 17000, '/assets/img/p1.png');
    let l6 = new Products(102, 'Casio Privia PX-870 88 Key Digital Piano', 9000, '/assets/img/p2.jpg');
    let l7 = new Products(103, 'Casio Privia PX-870 88 Key Digital Piano', 20000, '/assets/img/p4.jpg');
    let l8 = new Products(104, 'Casio Privia PX-870 88 Key Digital Piano', 20000, '/assets/img/p3.jpg');
    this.li.push(l1);
    this.li.push(l2);
    this.li.push(l3);
    this.li.push(l4);
    this.li.push(l5);
    this.li.push(l6);
    this.li.push(l7);
    this.li.push(l8);
  }
  getli() {
    return this.li;
  }
}
