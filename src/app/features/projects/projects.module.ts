import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsSidebarComponent } from './projects-sidebar/projects-sidebar.component';
import { ProjectsShellComponent } from './projects-shell/projects-shell.component';


@NgModule({
  declarations: [
    ProjectsViewComponent,
    ProjectsSidebarComponent,
    ProjectsShellComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
