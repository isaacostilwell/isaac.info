import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardGenViewComponent } from './board-gen-view/board-gen-view.component';
import { BoardGenSidebarComponent } from './board-gen-sidebar/board-gen-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BoardGenViewComponent,
        outlet: 'view-content'
      },
      {
        path: '',
        component: BoardGenSidebarComponent,
        outlet: 'sidebar-content'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardGenRoutingModule { }
