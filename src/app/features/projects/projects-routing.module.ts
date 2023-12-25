import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectsSidebarComponent } from './projects-sidebar/projects-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: ProjectsSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
