import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './loginpage.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports :[FormsModule,ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Invalid Email', () => {
    let email = component.loginForm.controls.email;
    email.setValue("tinagmail");
    expect(email.invalid).toBeTruthy;
  });
  it('Valid Email', () => {
    let email = component.loginForm.controls.email;
    email.setValue("tina@gmail.com");
    expect(email.valid).toBeTruthy;
  });
  it('Valid Password', () => {
    let password = component.loginForm.controls.password;
    password.setValue("tina@");
    expect(password.valid).toBeTruthy;
  });
  it('Invalid Password', () => {
    let password = component.loginForm.controls.password;
    password.setValue("ta@");
    expect(password.invalid).toBeTruthy;
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Login Here');
  });
  it('submitting a form',() =>{
    component.login();
  })

});
