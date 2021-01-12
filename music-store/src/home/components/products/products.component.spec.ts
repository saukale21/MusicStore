import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductDataService } from 'src/app/product-data.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of products equal to Dataservice product list', () => {
    component.ngOnInit();
    let dataservice = TestBed.inject(ProductDataService)
    expect(component.li.length).toBe(dataservice.li.length);
  });

  it('It should include low to high sorting option', () => {
    const matSelectValueObject: HTMLElement = fixture.debugElement.query(By.css('mat-select')).nativeElement;
    const innerSpan = matSelectValueObject.children[0];
    expect(innerSpan.innerHTML).toEqual('Price Low to High');
  });

  it('Sort By function should be called', () => {
    const select: HTMLElement = fixture.debugElement.query(By.css('mat-select')).nativeElement;
    const selectValue = select.children[0];
    selectValue.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const spy = spyOn(component, 'sortBy').and.callThrough();
    expect(spy).not.toHaveBeenCalled();
  })

});
