import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {isNumber,ProgressbarConfig, getValueInRange} from './ngx-progressbar'
@Component({
  selector: 'ngx-progressbar',
  templateUrl: './ngx-progressbar.component.html',
  styleUrls: ['./ngx-progressbar.component.scss'],
})


export class ProgressBarComponent {
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
