import { TestBed } from '@angular/core/testing';

import { TodosAPIService } from './todos-api.service';

describe('TodosAPIService', () => {
  let service: TodosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
