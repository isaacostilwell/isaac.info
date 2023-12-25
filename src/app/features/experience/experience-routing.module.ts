import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceViewComponent } from './experience-view/experience-view.component';
import { ExperienceSidebarComponent } from './experience-sidebar/experience-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ExperienceViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: ExperienceSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
