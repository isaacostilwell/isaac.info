import { Component } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss'
})
export class AboutViewComponent {
  showTerminal = false;

  toggleTerminal(): void {
    this.showTerminal = !this.showTerminal;
  }
}
