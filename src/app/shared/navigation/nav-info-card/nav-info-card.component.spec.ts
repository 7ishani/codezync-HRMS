import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInfoCardComponent } from './nav-info-card.component';

describe('NavInfoCardComponent', () => {
  let component: NavInfoCardComponent;
  let fixture: ComponentFixture<NavInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
