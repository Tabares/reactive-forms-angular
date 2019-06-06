import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterComponentComponent } from './resgister-component.component';

describe('ResgisterComponentComponent', () => {
  let component: ResgisterComponentComponent;
  let fixture: ComponentFixture<ResgisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
