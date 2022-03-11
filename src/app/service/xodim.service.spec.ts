import { TestBed } from '@angular/core/testing';

import { XodimService } from './xodim.service';

describe('XodimService', () => {
  let service: XodimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XodimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
