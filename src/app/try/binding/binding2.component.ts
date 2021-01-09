import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Directive, HostListener } from '@angular/core';

@Component({
  
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styles: []
})
export class Binding2Component implements OnInit {

  @Input() componentName: string;
  @Input() fromParent: string;
  @Output() toParent: EventEmitter<string> = new EventEmitter<string>();
  toogle5: boolean = false;
  toogle6: boolean = false;
  months = [{"Jahr":"2020", "Monat":'Jan'},{"Jahr":"2020", "Monat":'Feb'}];
  showMonths: boolean = true;
  showThis: string = "ShowMe !";
  _dept: string;

  constructor() { }

  set dept(value: string) {
    this._dept = value
  }

  get dept(): string {
    return this._dept
  }

  ngOnInit() {
  }

  toggleShowMe(): void {
    this.showThis += "!"
  }

  setToogle5(): void {
    this.toogle5 = !this.toogle5;
  }

  setToogle6(): void {
    this.toogle6 = !this.toogle6;
  }

  setPhoneNumber(phoneNr): void {
    console.log ('Phone-Nr.: '+phoneNr)
  }

  sendOutputVariable(): void {
    this.toParent.emit('Dieser Text wurde von binding2.component (Child) an binding.component (Parent) geschickt');
  }
}

