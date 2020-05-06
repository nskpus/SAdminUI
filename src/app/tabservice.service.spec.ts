import { TestBed } from '@angular/core/testing';

import { TabServiceService } from './tabservice.service';

describe('TabserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabServiceService = TestBed.get(TabServiceService);
    expect(service).toBeTruthy();
  });
});
