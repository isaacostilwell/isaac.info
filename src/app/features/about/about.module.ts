import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './about-view/about-view.component';
import { AboutSidebarComponent } from './about-sidebar/about-sidebar.component';
import { SharedShellModule } from '../../shared/shared-shell/shared-shell.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AboutViewComponent,
    AboutSidebarComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedShellModule,
    SharedModule
  ]
})
export class AboutModule { }
