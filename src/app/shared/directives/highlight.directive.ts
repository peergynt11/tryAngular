import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({  
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor (private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave')
    this.highlight(null);
  }

  highlight(el: string) {
    this.el.nativeElement.style.backgroundColor = el;
 }
}

@Directive({selector: '[counting]'})
export class CountClicks { 
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])

  onClick() {
    console.log('click', '$event.target' );
  }

//   onClick(btn) {
//     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
//  }
}
