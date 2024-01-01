import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss'
})
export class ProjectsViewComponent {
  showTerminal = false;
  
  toggleTerminal(): void {
    this.showTerminal = !this.showTerminal;
  }
}
