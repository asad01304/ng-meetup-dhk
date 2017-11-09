import { TestBed, inject } from '@angular/core/testing';

import { DashboardInfoService } from './dashboard-info.service';

describe('DashboardInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardInfoService]
    });
  });

  it('should be created', inject([DashboardInfoService], (service: DashboardInfoService) => {
    expect(service).toBeTruthy();
  }));
});
