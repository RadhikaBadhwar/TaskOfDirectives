import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRestrictInputLengthWithSpecificNumber]'
})
export class RestrictInputLengthWithSpecificNumberDirective {
  @Input() restrictLength: number | undefined;

  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    if (event.code === 'Backspace') {
      return;
    }

    if (this.elementRef.nativeElement.value.length === this.restrictLength) {
      event.preventDefault();
    }
  }
}
