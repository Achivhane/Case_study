import { TestBed } from '@angular/core/testing';

import { ViewtrainService } from './viewtrain.service';

describe('ViewtrainService', () => {
  let service: ViewtrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
