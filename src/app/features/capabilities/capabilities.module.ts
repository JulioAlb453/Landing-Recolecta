import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapabilitiesRoutingModule } from './capabilities-routing.module';
import { CapabilitiesComponent } from './capabilities.component';

@NgModule({
  declarations: [CapabilitiesComponent],
  imports: [CommonModule, CapabilitiesRoutingModule],
})
export class CapabilitiesModule {}
