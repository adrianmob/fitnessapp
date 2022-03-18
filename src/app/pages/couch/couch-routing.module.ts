import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouchPage } from './couch.page';

const routes: Routes = [
  {
    path: '',
    component: CouchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouchPageRoutingModule {}
