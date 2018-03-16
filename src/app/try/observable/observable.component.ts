import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';
import { MyObservable } from './my-observable'
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  zeit1: Observable<string>;
  zeit2: Observable<string>;
  zeit3: Observable<string>;

  // zeit = new Observable<string>((observer: Subscriber<string>) => {
  //     setInterval(() => observer.next(new Date().toString()), 1000);
  //   });


  constructor() { }

  ngOnInit() {
    // this.observable1();
    // this.observable2();
    // this.observable3();
    // this.observable4();
    // this.observable5();
    this.observable6();
    this.observable7();
    this.observable8();
  }

  observable1(): void {

    console.log("Initialzing observable with Observable.from with callback function definitions in line")

    let numbers=[1,5,10,34];
    let source = Observable.from(numbers);

    source.subscribe(
      value => console.log(`value: ${value}`),
      e =>     console.log(`error: ${e}`),
      () =>    console.log('complete')
    );
  }

  observable2(): void {
    console.log("Initialzing observable with Observable.of with callback function definitions in line")

    let source = Observable.of(1,5,10,34);

    source.subscribe(
      value => console.log(`value: ${value}`),
      e =>     console.log(`error: ${e}`),
      () =>    console.log('complete')
    );  
  }


  observable3(): void {
    console.log("Initialzing observable with Observable.of with a separate observer object (const)")

    let source = Observable.of(1,5,10,34);

    const myObserver = {
      next: value => console.log('Observer got a next value: ' + value),
      error: e => console.error('Observer got an error: ' + e),
      complete: () => console.log('Observer got a complete notification')
    }
    source.subscribe(myObserver);  
  }

  observable4(): void {
    console.log("Initialzing observable with Observable.of with a separate observer object (class)")

    let source = Observable.of(1,5,10,34);
    source.subscribe(new myObserver());  
  }  

  observable5(): void {

    console.log("Initialzing observable with Observable constructor with a separate observer object (class)");

    function sequencer(observer) {
      for (let index = 1; index < 10; index++) {
        observer.next(index);
      }
    }

    // Create a new Observable that will deliver the above sequence
    let source = new Observable(sequencer);       
    source.subscribe(new myObserver());

  }  


  observable6(): void {
    console.log("Subscription of Observable is deon int the template via async pipe");

    this.zeit1 = new Observable<string>((observer: Subscriber<string>) => {
       setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }  

  observable7(): void {
    console.log("Subscription of Observable is deon int the template via async pipe");

    function sequencer (observer) {
      setInterval( () =>  observer.next( new Date().toString() ,1000 ) );
    }
    this.zeit2 = new Observable<string>(sequencer);   
  }  

  observable8(): void {
    console.log("Subscription of Observable is deon int the template via async pipe");

    function sequencer (observer) {
      setInterval( function() { observer.next( new Date().toString() ,1000 ) } );
    }
    this.zeit3 = new Observable<string>(sequencer);   
  }  

} //class

class myObserver  {


  next( value ) {
    console.log('Observer got a next value: ' + value)
  }

  error(err) {
    console.log('Observer got an error: ' + err)
  }

  complete() {
    console.log('Observer got a complete notification')
  }
  
}