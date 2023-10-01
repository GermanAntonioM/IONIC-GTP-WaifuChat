import { TestBed } from '@angular/core/testing';

import { AndroidAnimationHandlerService } from './android-animation-handler.service';

describe('AndroidAnimationHandlerService', () => {
  let service: AndroidAnimationHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidAnimationHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
