import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDetails]'
})
export class DetailsDirective {

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  @HostListener('mouseover', ['$event'])
  onEnter(event: Event) {
    this.renderer.addClass(this.element.nativeElement, 'enter');
  }

  @HostListener('mouseout', ['$event'])
  onLeave(event: Event) {
    this.renderer.removeClass(this.element.nativeElement, 'enter');
  }
}
