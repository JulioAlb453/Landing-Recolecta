import { Component, signal } from '@angular/core';

import { headerEnterAnimation } from '../../shared/animations/page-enter.animations';

interface NavLink {
  readonly label: string;
  readonly routerLink: string;
  readonly fragment?: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [headerEnterAnimation],
})
export class HeaderComponent {
  protected readonly navLinks: ReadonlyArray<NavLink> = [
    { label: 'Proyecto', routerLink: '/', exact: true },
    { label: 'Quiénes somos', routerLink: '/quienes-somos' },
    // { label: 'Misión y Visión', routerLink: '/mision-y-vision' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
