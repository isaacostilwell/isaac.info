import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './shared-sidebar/shared-sidebar.component';
import { RouterModule } from '@angular/router';
import { ShellHistoryService } from './shared-shell/shell-history.service';



@NgModule({
  declarations: [
    SharedSidebarComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
  ], 
  exports: [
    SharedSidebarComponent,
  ]
})
export class SharedModule { }
