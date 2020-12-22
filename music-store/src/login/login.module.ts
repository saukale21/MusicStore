import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';

@NgModule({
    imports: [CommonModule],
    exports: [LoginComponent,SignupComponent],
    declarations: 
    [
        LoginComponent,
        SignupComponent
    ],
    providers: [],
})
export class LoginModule { }
