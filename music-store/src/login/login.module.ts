import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signuppage/signuppage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
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
              '95164095729-gkv9ptr3gmkrnqldqkm7kr6ivp4hk33s.apps.googleusercontent.com'
            )
          },
          
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
