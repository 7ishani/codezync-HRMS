import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilterMsgComponent } from './nav-filter-msg.component';

describe('NavFilterMsgComponent', () => {
  let component: NavFilterMsgComponent;
  let fixture: ComponentFixture<NavFilterMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFilterMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilterMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
