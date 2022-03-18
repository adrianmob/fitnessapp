import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayExercisePage } from './play-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: PlayExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayExercisePageRoutingModule {}
