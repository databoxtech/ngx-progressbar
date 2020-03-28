import { NgModule } from '@angular/core';
import { NgxProgressBarComponent } from './ngx-progress-bar.component';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [NgxProgressBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxProgressBarComponent],
  entryComponents: [NgxProgressBarComponent]
})
export class NgxProgressBarModule { }
