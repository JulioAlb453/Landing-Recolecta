import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'quienes-somos',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
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
