import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('https://musicstoresss.herokuapp.com/product');

  }
  getProductByType(type): Observable<any> {
    return this.http.get(`https://musicstoresss.herokuapp.com/product/?instrument=${type}`)
  }
  getProductById(id): Observable<any> {
    return this.http.get(`https://musicstoresss.herokuapp.com/product/${id}`)
  }
}
