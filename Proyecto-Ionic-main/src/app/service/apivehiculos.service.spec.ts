import { TestBed } from '@angular/core/testing';

import { APIVehiculosService } from './apivehiculos.service';

describe('APIVehiculosService', () => {
  let service: APIVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
