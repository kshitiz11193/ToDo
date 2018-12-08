import { TestBed } from '@angular/core/testing';

import { BeatsService } from './beats.service';

describe('BeatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatsService = TestBed.get(BeatsService);
    expect(service).toBeTruthy();
  });
});
