import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge';

@Component({
  selector: 'app-jqwidgets',
  templateUrl: './jqwidgets.component.html',
  styleUrls: ['./jqwidgets.component.css']
})
export class JqwidgetsComponent implements OnInit, AfterViewInit {

  @ViewChild('xyzGauge') myGauge: jqxGaugeComponent;
  @ViewChild('gaugeValue') gaugeValue: ElementRef;
  @ViewChild('msgNotification') msgNotification: jqxNotificationComponent;

  values: number[] = [88, 170, 130, 137];
  labels: any = { position: 'outside', interval: 20 };
  ticksMinor: any = { interval: 5, size: '5%' };
  ticksMajor: any = { interval: 20, size: '10%' };
  cap: any = { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb' } };
  border: any = { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } };
  pointer: any = { style: { fill: '#2e79bb' }, width: 5 };
  ranges: any[] =
  [
      { startValue: 0, endValue: 150, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
      { startValue: 150, endValue: 180, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
      { startValue: 180, endValue: 220, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0 }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.myGauge.value(140);      
    //    this.myLinearGauge.value(40);   
  }

  ngOnInit() {
    
  }

  changeGaugeValue(){
    let wert: number = Math.round(this.myGauge.val());
    if (wert === 70) {
      this.myGauge.value(140);      
    } else {
      this.myGauge.value(70);
    }
  }

  onValueChanging(event: any): void {
    this.gaugeValue.nativeElement.innerHTML = Math.round(event.args.value) + ' kph';
  }

  onClickOpenMessageNotification(): void {
    console.log('click');
    this.msgNotification.open();
}
}
