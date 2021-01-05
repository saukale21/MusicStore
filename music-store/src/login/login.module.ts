import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signuppage/signuppage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

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
    
    providers: [],
})
export class LoginModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: LoginModule,
          providers: [LoginService]
        }
      }
}
