import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/components/loginpage/loginpage.component';
import { SignupComponent } from '../login/components/signuppage/signuppage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }// },
  // {
  //   path: 'signup',
  //   component: SignupComponent

  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
