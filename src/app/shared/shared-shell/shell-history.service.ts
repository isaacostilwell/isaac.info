import { Injectable } from '@angular/core';
import { ExecuteService } from './execute.service';

@Injectable({
  providedIn: 'root'
})

export class ShellHistoryService {
  private history: cmdBundle[] = [];

  constructor(private executeService: ExecuteService) { }

  getHistory(): cmdBundle[] {
    return this.history;
  }

  addCommand(command: string): void {
    const response = this.executeService.executeCommand(command);
    const bundle: cmdBundle = {
      command: command,
      response: response,
    }
    this.history.push(bundle);
  }
}


export type cmdBundle = {
  command: string,
  response: string | null,
}