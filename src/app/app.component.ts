import { Component, enableProdMode } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '../environments/environment';


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
    {form: 'modal', formDesc: 'Modaler Dialog'}, 
  ]
  
  pageTitle = 'try-It on: ' + environment.envName;
  
  constructor(private _titleService: Title) {  
    this._titleService.setTitle(this.pageTitle);
  }

}