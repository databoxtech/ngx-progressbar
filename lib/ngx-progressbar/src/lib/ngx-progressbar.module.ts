import { NgModule } from '@angular/core';
import { NgxProgressbarComponent } from './ngx-progressbar.component';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [NgxProgressbarComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxProgressbarComponent]
})
export class NgxProgressbarModule { }
