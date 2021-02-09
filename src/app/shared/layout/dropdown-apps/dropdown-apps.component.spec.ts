import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAppsComponent } from './dropdown-apps.component';

describe('DropdownAppsComponent', () => {
  let component: DropdownAppsComponent;
  let fixture: ComponentFixture<DropdownAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
