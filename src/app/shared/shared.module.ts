import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WaveEffectDirective } from './directives/wave-effect.directive';
import { IconComponent } from './icon/icon.component';
import { WaveDividerComponent } from './wave-divider/wave-divider.component';

@NgModule({
  declarations: [WaveDividerComponent, WaveEffectDirective, IconComponent],
  imports: [CommonModule],
  exports: [WaveDividerComponent, WaveEffectDirective, IconComponent],
})
export class SharedModule {}
