# ngx-progressbar
ngx-progressbar is simple angular progress bar component.


## Usage
1. Import NgxProgressbarModule in you app.modules.ts file
2. Place below snippest in your template/ html
```html
<ngx-progressbar
    [showValue]="true"
    [value]="value"
    [max]="200"
    text="Sample" height="50px" 
    color="rgb(81, 195, 100)" 
    barcolor="#FF0000">
</ngx-progressbar>
```

##  Configurations
* showValue: Whether to display percentage value towards end of progress bar
* max: Max progress value. You don't need to scale. You can set this to your max value and use. **Defaults to 100**
* value: Current progress value. Actual percentage will be calculated as, = value*100/max
* text: Text to be displayed at the start of the progress bar
* color: Background color of the progress component
* barcolor: Progress bar color
* height: Set this in 'px' to to change the height of the progress bar. **Defaults to 20px**