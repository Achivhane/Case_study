import { TestBed } from '@angular/core/testing';

import { PayemntServiceService } from './payemnt-service.service';

describe('PayemntServiceService', () => {
  let service: PayemntServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayemntServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
