import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from 'src/home/services/products.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegineerComponent } from './begineerpage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
describe('BegineerpageComponent', () => {
  let component: BegineerComponent;
  let fixture: ComponentFixture<BegineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule,HttpClientTestingModule,BrowserAnimationsModule,],
      declarations: [ BegineerComponent ],
      providers:[ProductsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain four Categories',async()=>{
    let fixture= TestBed.createComponent(BegineerComponent)
    let app= fixture.debugElement.componentInstance;
    fixture.detectChanges(); 
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.view').length).toEqual(4);
    });
 
});
