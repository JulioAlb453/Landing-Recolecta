import { Component } from '@angular/core';

import { missionVisionEnterAnimation } from '../../shared/animations/page-enter.animations';
import { MISSION_VISION_CONTENT, MissionVisionContent } from './mission-vision.data';

@Component({
  selector: 'app-mission-vision',
  standalone: false,
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css',
  animations: [missionVisionEnterAnimation],
})
export class MissionVisionComponent {
  protected readonly content: MissionVisionContent = MISSION_VISION_CONTENT;
}
