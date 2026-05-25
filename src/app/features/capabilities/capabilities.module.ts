import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapabilitiesRoutingModule } from './capabilities-routing.module';
import { CapabilitiesComponent } from './capabilities.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [CapabilitiesComponent],
  imports: [CommonModule, CapabilitiesRoutingModule, SharedModule],
})
export class CapabilitiesModule {}
