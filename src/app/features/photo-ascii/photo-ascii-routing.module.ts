import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoAsciiViewComponent } from './photo-ascii-view/photo-ascii-view.component';
import { PhotoAsciiSidebarComponent } from './photo-ascii-sidebar/photo-ascii-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PhotoAsciiViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: PhotoAsciiSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoAsciiRoutingModule { }
