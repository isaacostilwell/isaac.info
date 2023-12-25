import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeSidebarComponent } from './resume-sidebar/resume-sidebar.component';
import { ResumeShellComponent } from './resume-shell/resume-shell.component';


@NgModule({
  declarations: [
    ResumeViewComponent,
    ResumeSidebarComponent,
    ResumeShellComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
