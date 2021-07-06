import { TestBed } from '@angular/core/testing';

import { ViewticketService } from './viewticket.service';

describe('ViewticketService', () => {
  let service: ViewticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
