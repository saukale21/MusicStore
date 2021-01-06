import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

  


@Injectable()
export class LoginService {
    login: boolean = false;
    url: String;
    constructor(private http: HttpClient) { }
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    

    signUpUser(data):Observable<any> {
        return this.http.post<any>('https://musicstoresss.herokuapp.com/user/signup',JSON.stringify(data),{headers: this.headers});
    }
    loginUser(data): Observable<any> {
        return this.http.post<any>('https://musicstoresss.herokuapp.com/user/signin',data);

    };
    setLoginFlag() {
        this.login = true;
    }
    getLoginFlag() {
        return this.login;
    }
    setURL(data) {
        this.url = data;
    }
    getURL() {
        return this.url;
    }

}