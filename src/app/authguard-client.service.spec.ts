import { TestBed } from '@angular/core/testing';

import { AuthguardClientService } from './authguard-client.service';

describe('AuthguardClientService', () => {
  let service: AuthguardClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
