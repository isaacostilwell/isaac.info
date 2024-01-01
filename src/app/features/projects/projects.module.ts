import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsSidebarComponent } from './projects-sidebar/projects-sidebar.component';
import { ProjectsShellComponent } from './projects-shell/projects-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedShellModule } from '../../shared/shared-shell/shared-shell.module';


@NgModule({
  declarations: [
    ProjectsViewComponent,
    ProjectsSidebarComponent,
    ProjectsShellComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    SharedShellModule,
  ]
})
export class ProjectsModule { }
