import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ProductsService {
  url = environment.URL;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.url}/product`);
  }
  getProductByType(type): Observable<any> {
    return this.http.get(`${this.url}/product/?instrument=${type}`)
  }
  getProductById(id): Observable<any> {
    return this.http.get(`${this.url}/product/${id}`)
  }
  getRecommendedProducts(): Observable<any> {
    return this.http.get(`${this.url}/product/?recommended=true`);
  }
  getBegineerProducts(): Observable<any> {
    return this.http.get(`${this.url}/product/?beginner=true`);
  }
}
