import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'galeria',
    loadChildren: () =>
      import('./pages/galeria/galeria.module').then((m) => m.GaleriaPageModule),
  },
  {
    path: 'citas',
    loadChildren: () =>
      import('./pages/citas/citas.module').then((m) => m.CitasPageModule),
  },
  {
    path: 'couch',
    loadChildren: () =>
      import('./pages/couch/couch.module').then((m) => m.CouchPageModule),
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./pages/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'list-exercise/:key/:name',
    loadChildren: () =>
      import('./pages/list-exercise/list-exercise.module').then(
        (m) => m.ListExercisePageModule
      ),
  },
  {
    path: 'entrenamientos',
    loadChildren: () =>
      import('./pages/entrenamientos/entrenamientos.module').then(
        (m) => m.EntrenamientosPageModule
      ),
  },
  {
    path: 'play-exercise',
    loadChildren: () =>
      import('./pages/play-exercise/play-exercise.module').then(
        (m) => m.PlayExercisePageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
