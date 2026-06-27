import { Component } from '@angular/core';

import { aboutEnterAnimation } from '../../shared/animations/page-enter.animations';
import { DATA_DELETION_CONTENT, DataDeletionContent } from './data-deletion.data';

@Component({
  selector: 'app-data-deletion',
  standalone: false,
  templateUrl: './data-deletion.component.html',
  styleUrl: './data-deletion.component.css',
  animations: [aboutEnterAnimation],
})
export class DataDeletionComponent {
  protected readonly content: DataDeletionContent = DATA_DELETION_CONTENT;
}
