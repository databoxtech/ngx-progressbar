import { Component , OnInit , Input} from '@angular/core';
import {isNumber , ProgressbarConfig , getValueInRange} from './ngx-progressbar';
@Component({
  selector: 'lib-ngx-progressbar',
  template: `
  <div class="progress" [style.minHeight]="minheightvalue" [style.height]="setHeight()"  [style.background-color]="barcolor">
  <div class="progress-bar"
    [style.width.%]="getPercentValue()"
  [attr.aria-valuenow]="value" aria-valuemin="0" [attr.aria-valuemax]="maxvalue" [style.background-color]="color">
    <div class="showTextValue-main-div" [style.minHeight]="minheightvalue" [style.height]="setHeight()" >
      <div id="showtext" class="showtext">
        <p *ngIf="text"  >{{text}}</p>
      </div>
      <div id="showvalue" class="showvalue" [style.height]="setHeight()">
        <p *ngIf="showValue" >{{getPercentValue()}}%</p>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`.progress{
    display: flex;
    overflow: hidden;
    font-size: .75rem;
    border-radius: .25rem;
}
.showtext{
    color: black;
    padding: 5px;
    width: 70%;
    display: table-cell;
    vertical-align: middle;
}
.showvalue{
    width: 25%;
    text-align: right;
    vertical-align: middle;
    font-size: 15px;
    display: table-cell;
    padding: 3px;
   
}

.showTextValue-main-div{
    width: 94%;
    position: absolute;
    display: table;
}`
    
  ]
})
export class NgxProgressbarComponent {

  private max: number;
  private minheight: string;
  private returnval:number;
  @Input()
  set maxvalue(max: number) {
    this.max = !isNumber(max) || max <= 0 ? 100 : max;
  }

  get maxvalue(): number { return this.max; }
  
  @Input() animated: boolean;
  @Input() showValue: boolean;
  @Input() textType: string;
  @Input() type: string;
  @Input() value = 0;
  @Input() height: string;
  @Input() text: string;
  @Input() color: string;
  @Input() barcolor: string;
  @Input() set minheightvalue(minheight:string){
        this.minheight = minheight? minheight+"px" : "20px";
  }
  get minheightvalue():string { 
   // console.log(this.minheight);
    return this.minheight;
  }

constructor(config: ProgressbarConfig) {
    this.maxvalue = config.maxvalue
    this.animated = config.animated;
    this.textType = config.textType;
    this.type = config.type;
    this.showValue = config.showValue;
    this.minheight = config.minheight;
    this.text = config.text;
    this.barcolor = config.barcolor;
    this.color = config.color;

  }


  getPercentValue() { 
   // console.log(this.value);
    let returnval =100 * this.value / this.maxvalue;
    returnval=parseFloat(returnval.toFixed(2))
   // console.log(returnval);
    if(this.animated){

    }
    return returnval;
  }

  setHeight(){
    let height = document.getElementById('showtext').offsetHeight;
    return height+"px";
  }

}
