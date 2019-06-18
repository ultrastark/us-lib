import { TestBed } from '@angular/core/testing';

import { AngularWindowSizeListenerService } from './angular-window-size-listener.service';

describe('AngularWindowSizeListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularWindowSizeListenerService = TestBed.get(AngularWindowSizeListenerService);
    expect(service).toBeTruthy();
  });
});
