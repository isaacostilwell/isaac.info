import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoAsciiRoutingModule } from './photo-ascii-routing.module';
import { PhotoAsciiViewComponent } from './photo-ascii-view/photo-ascii-view.component';
import { PhotoAsciiAppComponent } from './photo-ascii-app/photo-ascii-app.component';
import { PhotoAsciiSidebarComponent } from './photo-ascii-sidebar/photo-ascii-sidebar.component';
import { PhotoAsciiShellComponent } from './photo-ascii-shell/photo-ascii-shell.component';


@NgModule({
  declarations: [
    PhotoAsciiViewComponent,
    PhotoAsciiAppComponent,
    PhotoAsciiSidebarComponent,
    PhotoAsciiShellComponent
  ],
  imports: [
    CommonModule,
    PhotoAsciiRoutingModule
  ]
})
export class PhotoAsciiModule { }
