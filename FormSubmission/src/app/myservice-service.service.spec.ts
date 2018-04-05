import { TestBed, inject } from '@angular/core/testing';

import { MyserviceServiceService } from './myservice-service.service';

describe('MyserviceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserviceServiceService]
    });
  });

  it('should be created', inject([MyserviceServiceService], (service: MyserviceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
