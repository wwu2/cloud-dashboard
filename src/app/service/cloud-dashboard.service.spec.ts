import { TestBed } from '@angular/core/testing';

import { CloudDashboardService } from './cloud-dashboard.service';

describe('CloudDashboardService', () => {
  let service: CloudDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
