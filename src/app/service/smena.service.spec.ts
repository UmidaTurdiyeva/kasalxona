import { TestBed } from '@angular/core/testing';

import { SmenaService } from './smena.service';

describe('SmenaService', () => {
  let service: SmenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
