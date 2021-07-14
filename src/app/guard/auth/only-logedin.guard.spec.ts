import { TestBed } from '@angular/core/testing';

import { OnlyLogedinGuard } from './only-logedin.guard';

describe('OnlyLogedinGuard', () => {
  let guard: OnlyLogedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyLogedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
