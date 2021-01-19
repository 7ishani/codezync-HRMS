import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryTypeComponent } from './view-salary-type.component';

describe('ViewSalaryTypeComponent', () => {
  let component: ViewSalaryTypeComponent;
  let fixture: ComponentFixture<ViewSalaryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalaryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalaryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
