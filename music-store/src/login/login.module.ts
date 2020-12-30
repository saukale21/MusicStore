import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signuppage/signuppage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    
    ],
    exports: [LoginComponent, SignupComponent],
    declarations: 
    [
        LoginComponent,
        SignupComponent
    ],
    
    providers: [],
})
export class LoginModule { }
