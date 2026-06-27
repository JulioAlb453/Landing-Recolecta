import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataDeletionRoutingModule } from './data-deletion-routing.module';
import { DataDeletionComponent } from './data-deletion.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [DataDeletionComponent],
  imports: [CommonModule, DataDeletionRoutingModule, SharedModule, RouterModule],
})
export class DataDeletionModule {}
