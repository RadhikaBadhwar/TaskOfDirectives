import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictFirstCharacterZero]'
})
export class RestrictFirstCharacterZeroDirective {

  constructor() { }
@HostListener("keydown", ["$event"])
onkeydown(e:any){

  if(e.target.selectionStart===0 && e.key ==="0"){
    e.preventDefault();
  }

}
}
