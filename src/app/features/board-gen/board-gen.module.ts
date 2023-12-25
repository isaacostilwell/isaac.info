import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardGenRoutingModule } from './board-gen-routing.module';
import { BoardGenViewComponent } from './board-gen-view/board-gen-view.component';
import { BoardGenAppComponent } from './board-gen-app/board-gen-app.component';
import { BoardGenSidebarComponent } from './board-gen-sidebar/board-gen-sidebar.component';
import { BoardGenShellComponent } from './board-gen-shell/board-gen-shell.component';


@NgModule({
  declarations: [
    BoardGenViewComponent,
    BoardGenAppComponent,
    BoardGenSidebarComponent,
    BoardGenShellComponent
  ],
  imports: [
    CommonModule,
    BoardGenRoutingModule
  ]
})
export class BoardGenModule { }
