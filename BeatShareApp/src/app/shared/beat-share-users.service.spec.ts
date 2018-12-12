import { TestBed } from '@angular/core/testing';

import { BeatShareUsersService } from './beat-share-users.service';

describe('BeatShareUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatShareUsersService = TestBed.get(BeatShareUsersService);
    expect(service).toBeTruthy();
  });
});
