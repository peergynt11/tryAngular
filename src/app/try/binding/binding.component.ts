
import { Renderer2, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Binding2Component } from './binding2.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, AfterViewInit {

  @ViewChild(Binding2Component) b2C: Binding2Component;  
  @ViewChild("myDiv") myDiv: ElementRef;

  fromChild: string;
  soll_ich_class_fett_zuordnen: boolean = false;
  
  soll_ich_bunt_stylen: boolean = false;
  
  fontcolor: boolean = false
  fontSize: boolean = false
  fontStyle: boolean = false

  show_awesom: boolean = true
  show_move: boolean = true
  show_italic: boolean = true
  
   constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('b2C: '+this.b2C.componentName);
    console.log('b2C: '+this.b2C.toggleShowMe);
    console.log('b2C: '+this.b2C.showThis);

    const h1 = this.renderer.createElement('h1');
    const text = this.renderer.createText('Hello Binding example');

    this.renderer.appendChild(h1, text);
    this.renderer.appendChild(this.myDiv.nativeElement, h1);

    console.log('myDiv:'+this.myDiv.nativeElement);
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
