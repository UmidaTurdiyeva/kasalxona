import { TestBed } from '@angular/core/testing';

import { BemorService } from './bemor.service';

describe('BemorService', () => {
  let service: BemorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BemorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
