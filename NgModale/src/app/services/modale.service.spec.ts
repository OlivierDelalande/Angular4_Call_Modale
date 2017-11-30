import { TestBed, inject } from '@angular/core/testing';

import { ModaleService } from './modale.service';

describe('ModaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModaleService]
    });
  });

  it('should be created', inject([ModaleService], (service: ModaleService) => {
    expect(service).toBeTruthy();
  }));
});
