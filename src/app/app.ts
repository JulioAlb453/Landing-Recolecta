import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimations } from './shared/animations/route-transition.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  animations: [routeAnimations],
})
export class App {
  protected readonly title = signal('recolecta');


  protected prepareRoute(outlet: RouterOutlet): string {
    const animation = outlet.activatedRouteData?.['animation'];
    return typeof animation === 'string' ? animation : 'home';
  }
}
