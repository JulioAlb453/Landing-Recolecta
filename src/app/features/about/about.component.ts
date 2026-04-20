import { Component } from '@angular/core';

import { aboutEnterAnimation } from '../../shared/animations/page-enter.animations';
import { ABOUT_CONTENT, AboutContent } from './about.data';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [aboutEnterAnimation],
})
export class AboutComponent {
  protected readonly content: AboutContent = ABOUT_CONTENT;
}
