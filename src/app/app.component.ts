import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  navigationBar: string = "navbar navbar-expand-sm navbar-dark bg-primary";
  //navigationBar: string = "navbar navbar-expand-sm navbar-light bg-light";
  
  menuItems = [
    {form: 'welcome', formDesc: 'Welcome'},
    {form: 'jqwidgets', formDesc: 'JQWidgets examples'}, 
    {form: 'binding', formDesc: 'Binding examples'}, 
    {form: 'calculation', formDesc: 'Calculation'}, 
    {form: 'observable', formDesc: 'Observable'}, 
  ]
  
  _title = 'app';
  
  constructor() {  
  }

  get title(): string {
    return this._title;
  }

}