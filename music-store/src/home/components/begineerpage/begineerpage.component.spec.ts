import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegineerComponent } from './begineerpage.component';

describe('BegineerpageComponent', () => {
  let component: BegineerComponent;
  let fixture: ComponentFixture<BegineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegineerComponent ]
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
});
