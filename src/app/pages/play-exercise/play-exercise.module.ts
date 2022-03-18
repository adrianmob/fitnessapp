import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayExercisePageRoutingModule } from './play-exercise-routing.module';

import { PlayExercisePage } from './play-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayExercisePageRoutingModule
  ],
  declarations: [PlayExercisePage]
})
export class PlayExercisePageModule {}
