import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSpecificColor]'
})
export class SpecificColorDirective {


  constructor(private eleref: ElementRef , private elementrendrer: Renderer2) { }
ngOnInit(): void {
    //this.elementrendrer.setStyle(this.eleref.nativeElement, 'background-color','blue');
//this.backgroundColor = this.defaultColorc;
  }
  @HostListener('mouseenter') mouseenter(eventData: Event){
     this.elementrendrer.setStyle(this.eleref.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.backgroundColor='transparent';
    this.elementrendrer.setStyle(this.eleref.nativeElement, 'background-color','transparent');
  }

}
