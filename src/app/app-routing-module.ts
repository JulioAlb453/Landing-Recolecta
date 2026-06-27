import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'la-aplicacion',
    loadChildren: () =>
      import('./features/project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'quienes-somos',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'funcionalidades',
    loadChildren: () =>
      import('./features/capabilities/capabilities.module').then(
        (m) => m.CapabilitiesModule,
      ),
  },
  {
    path: 'eliminacion-de-datos',
    loadChildren: () =>
      import('./features/data-deletion/data-deletion.module').then(
        (m) => m.DataDeletionModule,
      ),
  },
  // {
  //   path: 'mision-y-vision',
  //   loadChildren: () =>
  //     import('./features/mission-vision/mission-vision.module').then(
  //       (m) => m.MissionVisionModule,
  //     ),
  // },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
