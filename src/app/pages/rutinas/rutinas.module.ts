import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasPageRoutingModule } from './rutinas-routing.module';

import { RutinasPage } from './rutinas.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasPageRoutingModule,
    SwiperModule,
  ],
  declarations: [RutinasPage],
})
export class RutinasPageModule {}
