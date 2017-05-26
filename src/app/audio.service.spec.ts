import { TestBed, inject } from '@angular/core/testing';

import { AudioService} from './audio.service';

describe('AudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioService]
    });
  });

  it('should ...', inject([AudioService], (service: AudioService) => {
    expect(service).toBeTruthy();
  }));
});
