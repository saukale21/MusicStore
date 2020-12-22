import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegineerpageComponent } from './begineerpage.component';

describe('BegineerpageComponent', () => {
  let component: BegineerpageComponent;
  let fixture: ComponentFixture<BegineerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegineerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegineerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
