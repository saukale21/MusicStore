import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialloginService } from '../../services/sociallogin.service';


import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router'
import { Socialusers } from 'src/login/socialusers';



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
  response;
  socialusers = new Socialusers();


  constructor(private formBuilder: FormBuilder,private loginservice: LoginService,public OAuth : SocialAuthService,
    private SocialLoginService: SocialloginService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
  });
}


  login() {
    console.log(this.loginForm.value);
    
    this.loginservice.loginUser(this.loginForm.value).subscribe(res=>{
        console.log(res);
        localStorage.setItem('token', res.token)
        this.loginservice.setLoginFlag();
        localStorage.setItem('login',"true");
        let url = this.loginservice.getURL();
        if(url == undefined || url == null) {
          this.router.navigate(['/cart']);
        }
        else
        this.router.navigate([url]);

      })
  }
  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if ( socialProvider == 'facebook') {
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if ( socialProvider == 'google') {
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(user => {
        console.log(socialProvider, user);
        if(user.provider == "GOOGLE" || user.provider =="FACEBOOK")
        {
          this.router.navigate(['/cart']);  
        }
    })

}
}



