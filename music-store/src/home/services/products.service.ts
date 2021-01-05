import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
    
    constructor(private http: HttpClient) { }

    getProducts():Observable<any> {
        return this.http.get('http://localhost:3000/product');
    }

}