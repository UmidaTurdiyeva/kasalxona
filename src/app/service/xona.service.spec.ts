import { TestBed } from '@angular/core/testing';

import { XonaService } from './xona.service';

describe('XonaService', () => {
  let service: XonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
