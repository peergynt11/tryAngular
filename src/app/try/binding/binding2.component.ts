import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styles: []
})
export class Binding2Component implements OnInit {

  @Input() fromParent: string;
  @Output() toParent: EventEmitter<string> = new EventEmitter<string>();

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

  setPhoneNumber(phoneNr): void {
    console.log ('Phone-Nr.: '+phoneNr)
  }

  sendOutputVariable(): void {
    this.toParent.emit('Dieser Text wurde von binding2.component (Child) an binding.component (Parent) geschickt');
  }



}
