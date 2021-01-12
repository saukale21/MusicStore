import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Socialusers } from '../socialusers';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  url;
  socialusers = new Socialusers();
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });



  constructor(private http: HttpClient,private loginservice: LoginService,private router : Router) { }
    Saveresponse(res){
      //console.log(res);
      //this.url = '/user/google';
      //return this.http.post<any>(this.url,res,{headers: this.headers});
    }
         
   

}
