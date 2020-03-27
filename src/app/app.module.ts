import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProgressBarComponentModule} from './components/ngx-progressbar/ngx-progressbar.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
