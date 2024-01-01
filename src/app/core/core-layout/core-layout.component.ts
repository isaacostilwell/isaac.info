import { Component } from '@angular/core';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrl: './core-layout.component.scss'
})
export class CoreLayoutComponent {
  isSidebarVisible: boolean = false;

  toggleSidebar(): void {
    const menu = document.getElementById("menu");
    if (menu == null) {
      console.log(`id 'menu' not found`);
      return;
    }
    menu.classList.toggle("openmenu");
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
