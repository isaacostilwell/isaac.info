import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationViewComponent } from './education-view/education-view.component';
import { EducationSidebarComponent } from './education-sidebar/education-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EducationViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: EducationSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
