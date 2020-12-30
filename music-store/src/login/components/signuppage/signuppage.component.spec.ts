import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { SignupComponent } from './signuppage.component';

describe('SignuppageComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports :[FormsModule,ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('Invalid Email', () => {
    let email = component.registerForm.controls.email;
    email.setValue("tinagmail");
    expect(email.invalid).toBeTruthy;
  });
  it('Valid Email', () => {
    let email = component.registerForm.controls.email;
    email.setValue("tina@gmail.com");
    expect(email.valid).toBeTruthy;
  });
  it('Valid Password', () => {
    let password = component.registerForm.controls.password;
    password.setValue("tina@");
    expect(password.valid).toBeTruthy;
  });
  it('Invalid Password', () => {
    let password = component.registerForm.controls.password;
    password.setValue("ta@");
    expect(password.invalid).toBeTruthy;
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Register Here');
  });
  it('submitting a form',() =>{
    component.register();
  })
});
