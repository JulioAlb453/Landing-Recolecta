import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapabilitiesComponent } from './capabilities.component';

const routes: Routes = [
  {
    path: '',
    component: CapabilitiesComponent,
    data: { animation: 'capabilities' },
    title: 'Funcionalidades · Juntos por un Chiapas Limpio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapabilitiesRoutingModule {}
