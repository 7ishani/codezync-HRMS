import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeCategoryComponent } from './view-employee-category.component';

describe('ViewEmployeeCategoryComponent', () => {
  let component: ViewEmployeeCategoryComponent;
  let fixture: ComponentFixture<ViewEmployeeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
