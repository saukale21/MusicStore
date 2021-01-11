import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialComponent } from './tutorial.component';

describe('TutorialComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in <h2> in the view ', () =>{
    const fixture = TestBed.createComponent(TutorialComponent);
    fixture.detectChanges();
    const compile = fixture.nativeElement;
    expect(compile.querySelector('h2').textContet).toContain('TUTORIALS');
  })
});
