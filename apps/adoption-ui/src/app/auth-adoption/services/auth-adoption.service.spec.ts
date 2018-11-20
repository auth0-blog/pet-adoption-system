import { TestBed } from '@angular/core/testing';

import { AuthAdoptionService } from './auth-adoption.service';

describe('AuthAdoptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAdoptionService = TestBed.get(AuthAdoptionService);
    expect(service).toBeTruthy();
  });
});
