import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    signUpUser():Observable<any> {
        let body = {
            username: 'kavita29',
            email: 'kavitasharma@gmail.com',
            password: 'XYZ@123'
        };
        return this.http.post<any>('http://localhost:3000/user/signup',body);
    }
    loginUser(data): Observable<any> {
        return this.http.post<any>('http://localhost:3000/user/signin',data);

    };

}