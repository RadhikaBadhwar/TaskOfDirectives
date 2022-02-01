import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

 
  value: string = "";
  constructor(private elementRef: ElementRef) {}
  @HostListener('input', ['$event']) onInput (event: InputEvent) {
      if(event.data?.match(/^[0-9]+$/) || !event.data) {
          this.value = this.elementRef.nativeElement.value;
      } else {
          this.elementRef.nativeElement.value = this.value;
      }
  }
}
 

