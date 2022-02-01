import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictNegativeNumber]'
})
export class RestrictNegativeNumberDirective {

  constructor() { }
  @HostListener("keydown", ["$event"])
  onkeydown(e:any){
  
    if(e.code==="Minus" && e.key ==="-" && e.keyCode ===189){
      e.preventDefault();
    }
  }
}
