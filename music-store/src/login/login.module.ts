import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signuppage/signuppage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { SocialloginService } from './services/sociallogin.service';


@NgModule({
    imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

    
    ],
    exports: [LoginComponent, SignupComponent],
    declarations: 
    [
        LoginComponent,
        SignupComponent
    ],
    
    providers: [[ SocialAuthService,
      {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [ 
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '658613871689-9mcn539e9f2mvklp84u8l1ba868vblnp.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3311062049016953')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    SocialloginService],],
})
export class LoginModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: LoginModule,
          providers: [LoginService]
        }
      }
}
