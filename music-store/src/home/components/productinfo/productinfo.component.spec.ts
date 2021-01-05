import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoComponent} from './productinfo.component';

fdescribe('ProductinfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoComponent ]
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

  it('should render title in <h2> in the view ', () =>{
    const fixture = TestBed.createComponent(ProductInfoComponent);
    fixture.detectChanges();
    const compile = fixture.nativeElement;
    expect(compile.querySelector('h2').textContet).toContain('Kadence Guitar');
  })
});
