import { TestBed } from '@angular/core/testing';

import { BinoService } from './bino.service';

describe('BinoService', () => {
  let service: BinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
