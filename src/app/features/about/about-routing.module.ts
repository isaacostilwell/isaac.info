import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSidebarComponent } from './about-sidebar/about-sidebar.component';
import { AboutViewComponent } from './about-view/about-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: AboutSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
