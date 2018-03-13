import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  soll_ich_class_fett_zuordnen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleClass(): void {
    this.soll_ich_class_fett_zuordnen = !this.soll_ich_class_fett_zuordnen;
  }

}
