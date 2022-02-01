import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictDecimal]'
})
export class RestrictDecimalDirective {

  constructor() { }
  @HostListener("keydown", ["$event"])
  onkeydown(e:any){
  
    if(e.code==="Period" && e.key ==="." && e.keyCode ===190){
      e.preventDefault();
    }
  }
}

