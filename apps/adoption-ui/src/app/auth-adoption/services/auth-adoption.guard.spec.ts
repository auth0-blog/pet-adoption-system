import { TestBed, async, inject } from '@angular/core/testing';

import { AuthAdoptionGuard } from './auth-adoption.guard';

describe('AuthAdoptionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdoptionGuard]
    });
  });

  it('should ...', inject([AuthAdoptionGuard], (guard: AuthAdoptionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
