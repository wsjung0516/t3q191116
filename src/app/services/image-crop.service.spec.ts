import { TestBed } from '@angular/core/testing';

import { ImageCropService } from './image-crop.service';

describe('ImageCropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageCropService = TestBed.get(ImageCropService);
    expect(service).toBeTruthy();
  });
});
