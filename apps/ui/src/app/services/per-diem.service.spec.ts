import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PerDiemService } from './per-diem.service';

describe('PerDiemService', () => {
  let service: PerDiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PerDiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
