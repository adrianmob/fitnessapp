import { TestBed } from '@angular/core/testing';

import { ListExerciseService } from './list-exercise.service';

describe('ListExerciseService', () => {
  let service: ListExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
