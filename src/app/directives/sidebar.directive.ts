import { Directive, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) onListenerTriggered(event: Event): void {
    const off = this.el.nativeElement;
    const top = this.el.nativeElement.getBoundingClientRect().top;
    console.log(this.el.nativeElement.getBoundingClientRect().top);

    if (top > -7) {
      this.renderer.removeClass(off, 'fixed');
      // console.log("I am supposed to b fixed");
    } else {
      this.renderer.addClass(off, 'fixed');
    }

  }

}
