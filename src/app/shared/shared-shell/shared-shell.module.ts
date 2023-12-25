import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedShellLayoutComponent } from './shared-shell-layout/shared-shell-layout.component';
import { SharedShellPs1Component } from './shared-shell-ps1/shared-shell-ps1.component';
import { SharedShellInputComponent } from './shared-shell-input/shared-shell-input.component';
import { SharedShellHistoryComponent } from './shared-shell-history/shared-shell-history.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedShellLayoutComponent,
    SharedShellPs1Component,
    SharedShellInputComponent,
    SharedShellHistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SharedShellLayoutComponent,
  ]
})
export class SharedShellModule { }
