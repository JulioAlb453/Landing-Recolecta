import { Component } from '@angular/core';

import { capabilitiesEnterAnimation } from '../../shared/animations/page-enter.animations';
import { CAPABILITIES_CONTENT, CapabilitiesContent } from './capabilities.data';

@Component({
  selector: 'app-capabilities',
  standalone: false,
  templateUrl: './capabilities.component.html',
  styleUrl: './capabilities.component.css',
  animations: [capabilitiesEnterAnimation],
})
export class CapabilitiesComponent {
  protected readonly content: CapabilitiesContent = CAPABILITIES_CONTENT;
}
