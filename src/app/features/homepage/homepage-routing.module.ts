import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { HomepageSidebarComponent } from './homepage-sidebar/homepage-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomepageViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: HomepageSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
