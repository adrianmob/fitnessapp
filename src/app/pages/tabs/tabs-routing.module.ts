import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { GaleriaPageModule } from '../galeria/galeria.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/rutinas',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'rutinas',
        loadChildren: () =>
          import('../rutinas/rutinas.module').then((m) => m.RutinasPageModule),
      },
      {
        path: 'galeria',
        loadChildren: () =>
          import('../galeria/galeria.module').then((m) => m.GaleriaPageModule),
      },
      {
        path: 'citas',
        loadChildren: () =>
          import('../citas/citas.module').then((m) => m.CitasPageModule),
      },
      {
        path: 'couch',
        loadChildren: () =>
          import('../couch/couch.module').then((m) => m.CouchPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
