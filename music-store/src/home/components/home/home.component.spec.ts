import { UserReviewService } from './../../services/user_review.service';
import { RecommendedService } from './../../services/recommended.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from 'src/home/services/products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ HomeComponent ],
      providers:[ProductsService,RecommendedService,UserReviewService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
