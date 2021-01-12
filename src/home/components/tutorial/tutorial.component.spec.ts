import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialComponent } from './tutorial.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

describe('TutorialComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MDBBootstrapModule.forRoot(),],
      declarations: [ TutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should render title', () => {
    const fixture = TestBed.createComponent(TutorialComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('TUTORIALS');});
 
    it('brand font family should be monospace',async()=>{
    let fixture= TestBed.createComponent(TutorialComponent)
    let app= fixture.debugElement.componentInstance;
    fixture.detectChanges(); 
    let compiled= fixture.debugElement.nativeElement;
    let title=compiled.querySelector('h2');
    expect(getComputedStyle(title).getPropertyValue('font-family')).toEqual('monospace');
    });

    it('brand font weight should be bold',async()=>{
      let fixture= TestBed.createComponent(TutorialComponent)
      let app= fixture.debugElement.componentInstance;
      fixture.detectChanges(); 
      let compiled= fixture.debugElement.nativeElement;
      let title=compiled.querySelector('h2');
      expect(getComputedStyle(title).getPropertyValue('font-weight')).toEqual('700');
      });
});
