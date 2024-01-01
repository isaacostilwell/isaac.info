import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExecuteService {
  validCommands: Record<string, string[]> = {
    'cd': ['homepage', 'about', 'education', 'experience', 'projects', 'resume', 'help'],
    'help': [],
    'instagram': [],
    'linkedin': [],
  };
  cmdNotExist = `Command not found. Type 'help' for a list of commands.`
  pageNotExist = `This page does not exist. Type 'cd help' for a list of pages.`

  constructor(private router: Router) { }

  executeCommand(command: string): string | null {
    const trimmedLine = command.trim().split(/\s+/);
    const cmd = trimmedLine[0];
    const args = trimmedLine.slice(1);
    if (this.commandIsValid(cmd, args)) {
      if (cmd === 'cd') {
        switch (args[0]) {
          case 'homepage':
            this.router.navigate(['/homepage']);
            return null;
          case 'about':
            this.router.navigate(['/about']);
            return null;
          case 'education':
            this.router.navigate(['/education']);
            return null;
          case 'experience':
            this.router.navigate(['/experience']);
            return null;
          case 'projects':
            this.router.navigate(['/projects']);
            return null;
          case 'resume':
            this.router.navigate(['/resume']);
            return null;
          case 'help':
            return `Valid pages: 'homepage', 'about', 'education', 'experience', 'projects', 'resume'.`
          default:
            return this.pageNotExist;
        }
      } else if (cmd === 'instagram') {
        return `Valid commands: help, cd, instagram, linkedin`;
      } else if (cmd === 'instagram') {
        window.open('https://instagr.am/icarus', '_blank');
        return null;
      } else if (cmd === 'linkedin') {
        window.open('https://www.linkedin.com/in/isaac-stilwell-2b1669274', '_blank');
        return null;
      }
    } 
    return this.cmdNotExist;
  }

  commandIsValid(cmd: string, args: string[]): boolean {
    if (!this.validCommands[cmd]) {
      return false;
    }
    if (args.length == 0) {
      console.log('yo');
      return true;
    }
    return args.every(arg => this.validCommands[cmd].includes(arg));
  }
}
