import { TestBed } from '@angular/core/testing';

import { BookedticketService } from './bookedticket.service';

describe('BookedticketService', () => {
  let service: BookedticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
