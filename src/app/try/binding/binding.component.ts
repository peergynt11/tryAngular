import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  fromChild: string;
  soll_ich_class_fett_zuordnen: boolean = false;
  
  soll_ich_bunt_stylen: boolean = false;
  
  fontcolor: boolean = false
  fontSize: boolean = false
  fontStyle: boolean = false

  show_awesom: boolean = true
  show_move: boolean = true
  show_italic: boolean = true
  

  constructor() { }

  ngOnInit() {
  }

  toggleClass(): void {
    this.soll_ich_class_fett_zuordnen = !this.soll_ich_class_fett_zuordnen;
  }

  toggleStyle(): void {
    this.soll_ich_bunt_stylen = !this.soll_ich_bunt_stylen;
  }

  toggleNgStyle(): void {
    this.fontcolor = !this.fontcolor;
    this.fontSize = !this.fontSize;
    this.fontStyle = !this.fontStyle
  }

  toggleNgClass(): void {
    this.show_awesom = !this.show_awesom
    this.show_move = !this.show_move
    this.show_italic = !this.show_italic
  }

  setClasses() {
    let classes = {
      awesome: this.show_awesom,
      move: this.show_move,
      italic: this.show_italic
    };
    return classes;
  }

  setStyles() {
    let styles = {
      'color':  this.fontcolor ? 'red' : 'blue',
      'font-size':  this.fontSize ? '3em' : '2em',
      'font-style':  this.fontStyle  ? 'italic' : 'normal',
    };
    return styles;
  }

  onToParent(message: string): void   {
    console.log('Received event from mobile-detail.component: '+message )
    this.fromChild = message;
  }


}
