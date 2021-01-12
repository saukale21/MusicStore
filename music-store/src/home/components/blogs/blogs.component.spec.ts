import { HttpClientModule } from '@angular/common/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogsComponent } from './blogs.component';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, MDBBootstrapModule.forRoot(),],
      declarations: [ BlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
