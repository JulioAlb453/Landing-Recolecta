import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WaveEffectDirective } from './directives/wave-effect.directive';
import { WaveDividerComponent } from './wave-divider/wave-divider.component';

@NgModule({
  declarations: [WaveDividerComponent, WaveEffectDirective],
  imports: [CommonModule],
  exports: [WaveDividerComponent, WaveEffectDirective],
})
export class SharedModule {}
