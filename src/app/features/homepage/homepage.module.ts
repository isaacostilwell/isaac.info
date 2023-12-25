import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';
import { HomepageSidebarComponent } from './homepage-sidebar/homepage-sidebar.component';
import { HomepageShellComponent } from './homepage-shell/homepage-shell.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedShellModule } from '../../shared/shared-shell/shared-shell.module';

@NgModule({
  declarations: [
    HomepageViewComponent,
    HomepageSidebarComponent,
    HomepageShellComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    SharedShellModule
  ]
})
export class HomepageModule { }
