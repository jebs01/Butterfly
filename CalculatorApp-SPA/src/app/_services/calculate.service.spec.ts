/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculateService } from './calculate.service';

describe('Service: Calculate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    });
  });

  it('should ...', inject([CalculateService], (service: CalculateService) => {
    expect(service).toBeTruthy();
  }));
});
