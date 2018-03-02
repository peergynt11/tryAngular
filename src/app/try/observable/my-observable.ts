import { Observer } from "rxjs";

export class MyObservable implements Observer<number>{

    next(value: number): void {
      console.log(value);
    }
  
    error(e): void  {
      console.log(e)
    }
  
    complete(): void {
      console.log("complete");
    }
}
  