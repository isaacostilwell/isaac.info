import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationViewComponent } from './education-view/education-view.component';
import { EducationSidebarComponent } from './education-sidebar/education-sidebar.component';
import { EducationShellComponent } from './education-shell/education-shell.component';


@NgModule({
  declarations: [
    EducationViewComponent,
    EducationSidebarComponent,
    EducationShellComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
