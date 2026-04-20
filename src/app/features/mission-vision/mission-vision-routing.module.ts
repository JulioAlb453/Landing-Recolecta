import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionVisionComponent } from './mission-vision.component';

const routes: Routes = [
  {
    path: '',
    component: MissionVisionComponent,
    data: { animation: 'mission-vision' },
    title: 'Misión y Visión · Juntos por un Chiapas Limpio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionVisionRoutingModule {}
