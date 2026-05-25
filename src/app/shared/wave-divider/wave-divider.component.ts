import { Component, Input } from '@angular/core';

type WaveVariant = 'asymmetric' | 'gentle' | 'layered' | 'smooth';

const WAVE_PATHS: Record<WaveVariant, readonly string[]> = {
  asymmetric: [
    'M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128V320H0Z',
  ],
  gentle: [
    'M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128V320H0Z',
  ],
  layered: [
    'M0,112L80,133.3C160,155,320,197,480,192C640,187,800,133,960,117.3C1120,101,1280,123,1360,133.3L1440,144V320H0Z',
    'M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160V320H0Z',
  ],
  smooth: [
    'M0,128L120,138.7C240,149,480,171,720,160C960,149,1200,107,1320,85.3L1440,64V320H0Z',
  ],
};

@Component({
  selector: 'app-wave-divider',
  standalone: false,
  template: `
    <div class="wave-divider" [class.wave-divider--flip]="flip" aria-hidden="true">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        focusable="false"
        role="presentation">
        @for (path of paths; track path; let index = $index) {
          <path
            [attr.d]="path"
            [attr.fill]="fill"
            [attr.fill-opacity]="paths.length > 1 && index === 0 ? 0.42 : 1" />
        }
      </svg>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      line-height: 0;
    }

    .wave-divider {
      height: clamp(4.5rem, 10vw, 8rem);
      overflow: hidden;
      pointer-events: none;
    }

    .wave-divider--flip {
      transform: rotate(180deg);
    }

    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
  `],
})
export class WaveDividerComponent {
  @Input() fill = 'currentColor';
  @Input() flip = false;
  @Input() variant: WaveVariant = 'gentle';

  protected get paths(): readonly string[] {
    return WAVE_PATHS[this.variant] ?? WAVE_PATHS.gentle;
  }
}
