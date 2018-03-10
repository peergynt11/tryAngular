import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';

@Component({
  selector: 'app-jqwidgets',
  templateUrl: './jqwidgets.component.html',
  styleUrls: ['./jqwidgets.component.css']
})
export class JqwidgetsComponent implements OnInit {

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

  ngOnInit() {
  }

  onValueChanging(event: any): void {
    this.gaugeValue.nativeElement.innerHTML = Math.round(event.args.value) + ' kph';
  }

  onClickOpenMessageNotification(): void {
    console.log('click');
    this.msgNotification.open();
}
}
