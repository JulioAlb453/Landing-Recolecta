import { Component } from '@angular/core';

import { FOOTER_CONTENT, FooterContent } from './footer.data';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly content: FooterContent = FOOTER_CONTENT;
}
