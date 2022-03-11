import { TestBed } from '@angular/core/testing';

import { BulimService } from './bulim.service';

describe('BulimService', () => {
  let service: BulimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
