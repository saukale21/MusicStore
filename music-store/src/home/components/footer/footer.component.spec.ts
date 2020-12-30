import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should display copyright information',async()=>{
    let fixture= TestBed.createComponent(FooterComponent)
    let app= fixture.debugElement.componentInstance;
    fixture.detectChanges(); 
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.copyright').textContent).toContain('Copyright © 2020 All rights reserved | Music Shop');
    });
  
    it('should contain four footer sections',async()=>{
      let fixture= TestBed.createComponent(FooterComponent)
      let app= fixture.debugElement.componentInstance;
      fixture.detectChanges(); 
      let compiled= fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('.footer-title').length).toEqual(4);
      });
    
      it('should contain icons',async()=>{
        let fixture= TestBed.createComponent(FooterComponent)
        let app= fixture.debugElement.componentInstance;
        fixture.detectChanges(); 
        let compiled= fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.fa').length).toEqual(3);
        });
  
      /*---------------------------style testing-----------------------------*/
      it('footer title should be in bold',async()=>{
        let fixture= TestBed.createComponent(FooterComponent)
        let app= fixture.debugElement.componentInstance;
        fixture.detectChanges(); 
        let compiled= fixture.debugElement.nativeElement;
        let title=compiled.querySelector('.footer-title');
        expect(getComputedStyle(title).getPropertyValue('font-weight')).toEqual('700');
        });

        it('footer font family should be monospace',async()=>{
          let fixture= TestBed.createComponent(FooterComponent)
          let app= fixture.debugElement.componentInstance;
          fixture.detectChanges(); 
          let compiled= fixture.debugElement.nativeElement;
          let title=compiled.querySelector('footer');
          expect(getComputedStyle(title).getPropertyValue('font-family')).toEqual('monospace');
          });

          it('footer font colour should be black',async()=>{
            let fixture= TestBed.createComponent(FooterComponent)
            let app= fixture.debugElement.componentInstance;
            fixture.detectChanges(); 
            let compiled= fixture.debugElement.nativeElement;
            let title=compiled.querySelector('footer');
            expect(getComputedStyle(title).getPropertyValue('color')).toEqual('rgb(0, 0, 0)');
            });

});
