import { Component } from '@angular/core';

import { homeEnterAnimation } from '../../shared/animations/page-enter.animations';
import { HOME_CONTENT, HomeContent } from './home.data';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [homeEnterAnimation],
})
export class HomeComponent {
  protected readonly content: HomeContent = HOME_CONTENT;
}
