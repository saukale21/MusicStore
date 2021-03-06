import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

/**
 *
 * @param form
 */
function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
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
  selector: 'app-signup',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  senderForm = {} ;


  constructor(private builder: FormBuilder,private loginservice: LoginService,private router: Router) { 
    this.buildForm()

  }

  ngOnInit(): void {
  }
  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
     confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {
    //console.log(this.registerForm.value);
    this.senderForm = {username :this.registerForm.controls.name.value,email:this.registerForm.controls.email.value, password : this.registerForm.controls.password.value };
    //console.log("SenderForm",this.senderForm);

    this.loginservice.signUpUser(this.senderForm).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/login']);
    })
  }


}
