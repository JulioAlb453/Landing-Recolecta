import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

type WavesApi = typeof import('node-waves');

@Directive({
  selector: '[appWaveEffect]',
  standalone: false,
})
export class WaveEffectDirective implements AfterViewInit {
  @Input() waveClasses: string | string[] = ['waves-light'];

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    void this.initWaves();
  }

  private async initWaves(): Promise<void> {
    const wavesModule = await import('node-waves') as WavesApi & { default?: WavesApi };
    const waves = wavesModule.default ?? wavesModule;

    waves.init({ duration: 650, delay: 120 });
    waves.attach(this.elementRef.nativeElement, this.waveClasses);
  }
}
