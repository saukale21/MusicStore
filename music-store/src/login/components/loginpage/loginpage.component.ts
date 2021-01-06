import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router'



function symbolValidator(control) { 
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;


  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }

}


@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private loginservice: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
  });
}

  login() {
    console.log(this.loginForm.value);
    //var email = this.loginForm.controls.email.value;
    //var password = this.loginForm.controls.password.value;
    
    this.loginservice.loginUser(this.loginForm.value).subscribe(res=>{
        console.log(res);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/cart'])

      })
  }


  }



