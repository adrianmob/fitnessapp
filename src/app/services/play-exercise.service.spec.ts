import { TestBed } from '@angular/core/testing';

import { PlayExerciseService } from './play-exercise.service';

describe('PlayExerciseService', () => {
  let service: PlayExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
