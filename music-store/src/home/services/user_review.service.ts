import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserReviewService {
    
    constructor(private http: HttpClient) { }
    token = localStorage.getItem('token');
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    });

    getUserReview(): Observable<any> {
        return this.http.get('https://musicstoresss.herokuapp.com/review');
    }

    postUserReview(body): Observable<any> {
        console.log(body);
        return this.http.post('https://musicstoresss.herokuapp.com/review',body,{headers: this.headers});
    }
}