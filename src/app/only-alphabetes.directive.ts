import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabetes]'
})
export class OnlyAlphabetesDirective {

  value: string = "";
  constructor(private elementRef: ElementRef) {}
  @HostListener('input', ['$event']) onInput (event: InputEvent) {
      if(event.data?.match(/^[a-zA-Z\s]*$/) || !event.data) {
          this.value = this.elementRef.nativeElement.value;
      } else {
          this.elementRef.nativeElement.value = this.value;
      }
  }

}
