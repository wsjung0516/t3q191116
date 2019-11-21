import { TestBed } from '@angular/core/testing';

import { ResImageService } from './res-image.service';

describe('ResImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResImageService = TestBed.get(ResImageService);
    expect(service).toBeTruthy();
  });
});
