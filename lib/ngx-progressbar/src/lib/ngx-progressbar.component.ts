import { Component , Input} from '@angular/core';

@Component({
  selector: 'ngx-progressbar',
  template: `
  <div class="progress" [style.height]="height"  [style.background-color]="barcolor">
    <div class="progress-bar"
      [style.width.%]="getPercentValue()"
      [attr.aria-valuenow]="value" aria-valuemin="0" 
      [attr.aria-valuemax]="maxvalue" 
      [style.background-color]="color">
        <div class="showTextValue-main-div" [style.height]="height" >
          <div id="showtext" class="showtext">
            <p *ngIf="text"  >{{text}}</p>
          </div>
          <div id="showvalue" class="showvalue" [style.height]="height">
            <p *ngIf="showValue" >{{getPercentValue()}}%</p>
          </div>
        </div>
    </div>
  </div>
  `,
  styles: [`
    .progress{
      display: flex;
      overflow: hidden;
      font-size: .75rem;
      border-radius: .25rem;
    }
    .showtext{
        color: black;
        padding: 0px 15px;
        display: table-cell;
        vertical-align: middle;
    }
    .showvalue{
        text-align: right;
        vertical-align: middle;
        font-size: 15px;
        display: table-cell;
        padding: 0px;
    }
    p{
      margin:0;
      padding:0;
    }

    .showTextValue-main-div{
        width: 94%;
        position: absolute;
        display: table;
    }
  `]
})
export class NgxProgressbarComponent {

  maxvalue: number = 100;

  @Input()
  set max(max: number) {
    this.maxvalue = max > 0 ? max : 100;
  }
  @Input() showValue: boolean = false;
  @Input() value = 0;
  @Input() height: string = '20px';
  @Input() text: string;
  @Input() color: string = "#28a745";
  @Input() barcolor: string = "#ced0d2";

  constructor() {

  }

  getPercentValue() {
    const returnval = 100 * this.value / this.maxvalue;
    return parseFloat(returnval.toFixed(2));
  }
}
