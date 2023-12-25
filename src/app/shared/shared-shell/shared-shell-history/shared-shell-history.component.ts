import { Component } from '@angular/core';
import { cmdBundle } from '../shell-history.service';
import { ShellHistoryService } from '../shell-history.service';

@Component({
  selector: 'app-shared-shell-history',
  templateUrl: './shared-shell-history.component.html',
  styleUrl: './shared-shell-history.component.scss'
})
export class SharedShellHistoryComponent {
  history: cmdBundle[]; 

  constructor(shellHistoryService: ShellHistoryService) {
    this.history = shellHistoryService.getHistory();
  }
}
