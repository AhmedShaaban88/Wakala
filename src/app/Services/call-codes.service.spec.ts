import { TestBed, inject } from '@angular/core/testing';

import { CallCodesService } from './call-codes.service';

describe('CallCodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallCodesService]
    });
  });

  it('should be created', inject([CallCodesService], (service: CallCodesService) => {
    expect(service).toBeTruthy();
  }));
});
