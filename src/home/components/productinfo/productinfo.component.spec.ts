import { LoginService } from './../../../login/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from 'src/home/services/products.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductInfoComponent} from './productinfo.component';


describe('ProductinfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],
      declarations: [ ProductInfoComponent],
      providers:[ProductsService,LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title in <h2> in the view ', () =>{
  //   const fixture = TestBed.createComponent(ProductInfoComponent);
  //   fixture.detectChanges();
  //   const compile = fixture.nativeElement;
  //   expect(compile.querySelector('h2').textContet).toContain('Kadence Guitar');
  // })
});
