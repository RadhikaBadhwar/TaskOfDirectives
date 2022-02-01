import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictTwoNumbersAfterDecimal]'
})
export class RestrictTwoNumbersAfterDecimalDirective {
  private pattern: RegExp = new RegExp(/^\d*\.?\d{0,1}$/g);
  constructor(private el: ElementRef) { }
  @HostListener("keydown", ["$event"])
  onkeydown(event:any){
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;

    const slice: string = [current.slice(0, 1), event.key == 'Decimal' ? '.' : event.key, current.slice(1)].join('');
    if(event.code === 'Backspace'){
      return
    }

    if (slice && !String(slice).match(this.pattern))
     {
      event.preventDefault();
    }
  }
}
