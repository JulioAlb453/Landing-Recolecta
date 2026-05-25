import { Component } from '@angular/core';

import { projectEnterAnimation } from '../../shared/animations/page-enter.animations';
import { PROJECT_CONTENT, ProjectContent } from './project.data';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  animations: [projectEnterAnimation],
})
export class ProjectComponent {
  protected readonly content: ProjectContent = PROJECT_CONTENT;
}
