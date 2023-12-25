import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-shared-shell-layout',
  templateUrl: './shared-shell-layout.component.html',
  styleUrl: './shared-shell-layout.component.scss'
})
export class SharedShellLayoutComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef | null = null;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}
