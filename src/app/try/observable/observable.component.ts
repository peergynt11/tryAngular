import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MyObservable } from './my-observable'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let numbers=[1,5,10,34];

    let source = Observable.from(numbers);
    source.subscribe(new MyObservable());

    source.subscribe(
      value => console.log(`value: ${value}`),
      e =>     console.log(`error: ${e}`),
      () =>    console.log('complete')
    );
  }
}


