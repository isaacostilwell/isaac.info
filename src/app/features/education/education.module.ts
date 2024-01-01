import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationViewComponent } from './education-view/education-view.component';
import { EducationSidebarComponent } from './education-sidebar/education-sidebar.component';
import { EducationShellComponent } from './education-shell/education-shell.component';
import { SharedShellModule } from '../../shared/shared-shell/shared-shell.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    EducationViewComponent,
    EducationSidebarComponent,
    EducationShellComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedShellModule,
    SharedModule
  ]
})
export class EducationModule { }
