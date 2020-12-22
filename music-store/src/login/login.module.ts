import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

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
