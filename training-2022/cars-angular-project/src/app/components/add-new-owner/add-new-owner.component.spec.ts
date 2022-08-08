import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOwnerComponent } from './add-new-owner.component';

describe('AddNewOwnerComponent', () => {
  let component: AddNewOwnerComponent;
  let fixture: ComponentFixture<AddNewOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
