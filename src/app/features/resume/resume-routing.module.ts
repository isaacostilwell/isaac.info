import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeSidebarComponent } from './resume-sidebar/resume-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ResumeViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: ResumeSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
