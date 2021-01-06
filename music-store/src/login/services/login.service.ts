import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    signUpUser(data):Observable<any> {
        return this.http.post<any>('https://musicstoresss.herokuapp.com/user/signup',data);
    }
    loginUser(data): Observable<any> {
        return this.http.post<any>('https://musicstoresss.herokuapp.com/user/signin',data);

    };

}