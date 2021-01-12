import { BlogsService } from './../../services/blogs.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [{ provide: BlogsService,useClass:BlogsService }],
})

export class BlogsComponent implements OnInit {
  blogsList: Array<any>;

  validatingForm: FormGroup;
  constructor(private blogsService:BlogsService) {
    
    this.validatingForm = new FormGroup({
      blogModalTitle: new FormControl('', Validators.required),
      blogModalText: new FormControl('', Validators.required),
    
    });
   }

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe(res=>{
      console.log(res.post);
      this.blogsList = res.post;
      console.log(this.blogsList);
      this.blogsService.getToken()
     
    })
  }
  get blogModalTitle() {
    return this.validatingForm.get('blogModalTitle');
  }

  get blogModalText() {
    return this.validatingForm.get('blogModalText');
  }
  method(){
    let title=this.blogModalTitle.value;
    let data=this.blogModalText.value;
    var obj;
    //validate button
   let localItem = localStorage.getItem('googleLogin');
      if(localItem == "true"){
        obj={
          title:title,
          description:data,
          date:new Date(),
          token:localStorage.getItem('googleToken'),
        }
      }
        else {
         obj={
            title:title,
            description:data,
            date:new Date()
          }
        }
      
   
    this.blogsService.postBlog(obj).subscribe(res=>{
      console.log(res);
      window.location.reload();
    });


}
}
