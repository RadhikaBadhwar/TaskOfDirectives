import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictSpace]'
})
export class RestrictSpaceDirective {

  constructor() { }
  @HostListener("keydown", ["$event"])
  onkeydown(event:any){
    console.log(event);
    if(event.code ==="Space"){
      event.preventDefault();
  }
}
}
