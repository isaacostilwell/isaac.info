import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLayoutComponent } from './core-layout/core-layout.component';
import { CoreViewComponent } from './core-view/core-view.component';
import { CoreSidebarComponent } from './core-sidebar/core-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreLayoutComponent,
    CoreViewComponent,
    CoreSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
