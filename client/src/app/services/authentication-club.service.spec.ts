import { TestBed } from '@angular/core/testing';

import { AuthenticationClubService } from './authentication-club.service';

describe('AuthenticationClubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationClubService = TestBed.get(AuthenticationClubService);
    expect(service).toBeTruthy();
  });
});
