import { TestBed } from '@angular/core/testing';

import { FmdbService } from './fmdb.service';

describe('FmdbService', () => {
  let service: FmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
