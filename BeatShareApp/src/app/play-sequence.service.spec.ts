import { TestBed } from '@angular/core/testing';

import { PlaySequenceService } from './play-sequence.service';

describe('PlaySequenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaySequenceService = TestBed.get(PlaySequenceService);
    expect(service).toBeTruthy();
  });
});
