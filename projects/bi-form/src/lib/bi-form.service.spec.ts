import { TestBed } from '@angular/core/testing';

import { BiFormService } from './bi-form.service';

describe('BiFormService', () => {
  let service: BiFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
