import { TestBed, inject } from '@angular/core/testing';

import { Ng2IzitoastService } from './ng2-izitoast.service';

describe('Ng2IzitoastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2IzitoastService]
    });
  });

  it('should be created', inject([Ng2IzitoastService], (service: Ng2IzitoastService) => {
    expect(service).toBeTruthy();
  }));
});
