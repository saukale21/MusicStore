import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/loginpage/loginpage.component';
import { SignupComponent } from './components/signuppage/signuppage.component';

@NgModule({
    imports: [CommonModule],
    exports: [LoginComponent, SignupComponent],
    declarations: 
    [
        LoginComponent,
        SignupComponent
    ],
    providers: [],
})
export class LoginModule { }
