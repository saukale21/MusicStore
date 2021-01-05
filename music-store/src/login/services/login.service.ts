import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    signUpUser():Observable<any> {
        let body = {
            username: 'saukale21',
            email: 'saurabhkale21@gmail.com',
            password: 'ABCD@123'
        };
        return this.http.post('http://localhost:3000/user/signup',body);
    };

}