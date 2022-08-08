import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWrapperComponent } from './car-wrapper.component';

describe('CarWrapperComponent', () => {
  let component: CarWrapperComponent;
  let fixture: ComponentFixture<CarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
