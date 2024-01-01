import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss'
})
export class ExperienceViewComponent {
  showTerminal = false;

  toggleTerminal(): void {
    this.showTerminal = !this.showTerminal;
  }
}
