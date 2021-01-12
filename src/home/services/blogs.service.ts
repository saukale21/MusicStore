
import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogsList:Array<any>;
   token :String;
   headers : any;
  
  constructor(private http: HttpClient) { 
//added dummy data
    this.blogsList=new Array<any>();
  }

  
    getToken(){
      let localItem;
      localItem = localStorage.getItem('googleLogin');
      if(localItem == "true"){
        this.token = localStorage.getItem('googleToken');
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
      });


      }
      else{
        this.token = localStorage.getItem('token');
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
      });
  
      }
    
    
    
    }

  getBlogs(): Observable<any> {
     //make a call
     return this.http.get('https://musicstoresss.herokuapp.com/blog');
  } 
  postBlog(body): Observable<any> {
    console.log(body);
    return this.http.post('https://musicstoresss.herokuapp.com/blog',body,{headers: this.headers});
}

}
