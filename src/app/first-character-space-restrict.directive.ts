import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstCharacterSpaceRestrict]'
})
export class FirstCharacterSpaceRestrictDirective {

  constructor() { }
  @HostListener("keydown", ["$event"])
  onkeydown(event:any){
    console.log(event);
    if(event.target.selectionStart===0 && event.code ==="Space"){
      event.preventDefault();
  }
}
}
