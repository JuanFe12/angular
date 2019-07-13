import { TestBed } from '@angular/core/testing';

import { CargaService } from './carga.service';

describe('CargaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaService = TestBed.get(CargaService);
    expect(service).toBeTruthy();
  });
});
