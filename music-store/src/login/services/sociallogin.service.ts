import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socialusers } from '../socialusers';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  socialusers = new Socialusers();


  constructor(private http: HttpClient,private loginservice: LoginService,private router : Router) { }
    Saveresponse(res){
      console.log(res);
    }

}
