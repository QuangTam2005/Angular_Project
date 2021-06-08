import { TestBed } from '@angular/core/testing';

import { GeneralOptionService } from './general-option.service';

describe('GeneralOptionService', () => {
  let service: GeneralOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
