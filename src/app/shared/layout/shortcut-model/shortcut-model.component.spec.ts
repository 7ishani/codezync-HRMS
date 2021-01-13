import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutModelComponent } from './shortcut-model.component';

describe('ShortcutModelComponent', () => {
  let component: ShortcutModelComponent;
  let fixture: ComponentFixture<ShortcutModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
