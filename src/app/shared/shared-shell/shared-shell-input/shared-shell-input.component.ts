import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ShellHistoryService } from '../shell-history.service';
import { ExecuteService } from '../execute.service';

@Component({
  selector: 'app-shared-shell-input',
  templateUrl: './shared-shell-input.component.html',
  styleUrl: './shared-shell-input.component.scss'
})
export class SharedShellInputComponent {
  value = '';
  
  constructor(private shellHistoryService: ShellHistoryService, private executeService: ExecuteService) {

  }

  ngOnInit(): void {
  }

  setValue(newValue: string): void {
    this.value = newValue;
  }


  onSubmit(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      this.shellHistoryService.addCommand(this.value);
      this.setValue('');
    }
  }
}
