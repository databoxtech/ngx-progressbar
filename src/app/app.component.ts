import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-progressbar';
  value = 0;
  interval;

  ngOnInit(){
    this.interval = setInterval(() => {
      this.value += 2;
      if(this.value==100)clearInterval(this.interval);
    },20)
  }
}
