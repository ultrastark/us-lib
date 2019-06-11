import { TestBed } from '@angular/core/testing';

import { UsSplashScreenService } from './us-splash-screen.service';

describe('UsSplashScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsSplashScreenService = TestBed.get(UsSplashScreenService);
    expect(service).toBeTruthy();
  });
});
