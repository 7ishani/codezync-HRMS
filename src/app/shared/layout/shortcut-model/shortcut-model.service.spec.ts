import { TestBed } from '@angular/core/testing';

import { ShortcutModelService } from './shortcut-model.service';

describe('ShortcutModelService', () => {
  let service: ShortcutModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortcutModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
