import { FriendService } from './friend.service';
import { TestBed } from '@angular/core/testing';

describe('FriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendService = TestBed.get(FriendService);
    expect(service).toBeTruthy();
  });
});
