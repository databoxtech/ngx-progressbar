import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './ngx-progressbar.component';
import { ProgressbarConfig } from './ngx-progressbar';
@NgModule({
  imports: [ 
    CommonModule, 
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})

export class ProgressBarComponentModule {}

