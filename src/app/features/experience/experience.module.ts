import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceViewComponent } from './experience-view/experience-view.component';
import { ExperienceSidebarComponent } from './experience-sidebar/experience-sidebar.component';
import { ExperienceShellComponent } from './experience-shell/experience-shell.component';
import { SharedShellModule } from '../../shared/shared-shell/shared-shell.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExperienceViewComponent,
    ExperienceSidebarComponent,
    ExperienceShellComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedShellModule,
    SharedModule,
  ]
})
export class ExperienceModule { }
