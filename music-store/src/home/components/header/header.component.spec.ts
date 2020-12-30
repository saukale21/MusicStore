import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display brand name as music store',async()=>{
    let fixture= TestBed.createComponent(HeaderComponent)
    let app= fixture.debugElement.componentInstance;
    fixture.detectChanges(); 
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('MUSIC STORE');
    });

    it('should contain four nav links',async()=>{
      let fixture= TestBed.createComponent(HeaderComponent)
      let app= fixture.debugElement.componentInstance;
      fixture.detectChanges(); 
      let compiled= fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('.nav-link').length).toEqual(4);
      });

      it('should display correct cart total',async()=>{
        let fixture= TestBed.createComponent(HeaderComponent)
        let app= fixture.debugElement.componentInstance;
        fixture.detectChanges(); 
        let compiled= fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.qty').textContent).toContain('2');
        });
      
      /*--------------Style testing---------------------*/

      it('brand font family should be monospace',async()=>{
        let fixture= TestBed.createComponent(HeaderComponent)
        let app= fixture.debugElement.componentInstance;
        fixture.detectChanges(); 
        let compiled= fixture.debugElement.nativeElement;
        let title=compiled.querySelector('.navbar-brand');
        expect(getComputedStyle(title).getPropertyValue('font-family')).toEqual('monospace');
        });
    
        it('brand font weight should be bold',async()=>{
          let fixture= TestBed.createComponent(HeaderComponent)
          let app= fixture.debugElement.componentInstance;
          fixture.detectChanges(); 
          let compiled= fixture.debugElement.nativeElement;
          let title=compiled.querySelector('.navbar-brand');
          expect(getComputedStyle(title).getPropertyValue('font-weight')).toEqual('700');
          });

    
});
