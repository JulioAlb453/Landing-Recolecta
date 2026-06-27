import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataDeletionComponent } from './data-deletion.component';

const routes: Routes = [
  {
    path: '',
    component: DataDeletionComponent,
    data: { animation: 'data-deletion' },
    title: 'Eliminación de datos · Recolecta',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDeletionRoutingModule {}
