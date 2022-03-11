import { TestBed } from '@angular/core/testing';

import { LavozimService } from './lavozim.service';

describe('LavozimService', () => {
  let service: LavozimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LavozimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
