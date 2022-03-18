import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouchPageRoutingModule } from './couch-routing.module';

import { CouchPage } from './couch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouchPageRoutingModule
  ],
  declarations: [CouchPage]
})
export class CouchPageModule {}
