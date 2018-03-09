import { Component } from '@angular/core';
import { print } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  menuItems = [
    {form: 'welcome', formDesc: 'Welcome'},
    {form: 'form1', formDesc: 'Template Form'},
    {form: 'form2', formDesc: 'Reactive Form'},
    {form: 'form3', formDesc: 'ngx bootstrap'},  
  ]
  
  _title = 'app';
  logo = '../assets/gecot-logo.png'

  constructor() {
    fromConstructor();
    this.print_array();
    
  }

  get title(): string {
    return this._title;
  }

  print_array(): void {
    var arr_names:number[] = new Array(4)  

    for( var i = 0;i<arr_names.length;i++ ) { 
       arr_names[i] = i * 2 
       console.log(arr_names[i]) 
    }        
  }  

}
function fromConstructor() {
  console.log('Konstruktor');
}

