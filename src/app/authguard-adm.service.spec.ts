import { TestBed } from '@angular/core/testing';

import { AuthguardAdmService } from './authguard-adm.service';

describe('AuthguardAdmService', () => {
  let service: AuthguardAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
