import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';
import { JqwidgetsComponent   } from './jqwidgets.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    jqxBarGaugeComponent
  ],
  declarations: [jqxBarGaugeComponent, jqxGaugeComponent, JqwidgetsComponent, jqxNotificationComponent]
})
export class JqwidgetsModule { }
