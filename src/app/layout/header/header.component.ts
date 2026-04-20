import { Component, signal } from '@angular/core';

import { headerEnterAnimation } from '../../shared/animations/page-enter.animations';

interface NavLink {
  readonly label: string;
  readonly fragment: string;
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
    { label: 'Proyecto', fragment: 'proyecto' },
    { label: 'IT2iD', fragment: 'it2id' },
    { label: 'Misión', fragment: 'mision' },
    { label: 'Municipios', fragment: 'municipios' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
