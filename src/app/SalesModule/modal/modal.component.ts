import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal', { static: true }) modal: ElementRef;
  @Input() message: string;
  componentRef: ComponentRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target'])
  onClick(event: any): void {
    console.log(this.componentRef);
    if (event.classList.contains('modal-overlay')) {
      this.destroy();
    }
  }

  destroy(): void{
    this.componentRef.destroy();
  }

}
