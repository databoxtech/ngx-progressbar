import { Injectable } from '@angular/core';

export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }
  
  export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
  }

  @Injectable({providedIn: 'root'})
  export class ProgressbarConfig {
    maxvalue= 100;
    animated = false;
    textType: string;
    text:string;
    type: string;
    showValue = false;
    minheight: string;
    color:string="#28a745";
    barcolor:string="#ced0d2";
  }
  
  export function getValueInRange(value: number, max: number, min = 0): number {
    return Math.max(Math.min(value, max), min);
  }