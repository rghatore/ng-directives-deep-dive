import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string = 'khaki';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'khaki');
  }

  @HostListener('mouseenter', ['$event'])
  onEnter(eventData: Event) {
    // console.log('eventData: ', eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'salmon');
    this.background = 'salmon';
  }

  @HostListener('mouseleave') onExit(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'khaki');
    this.background = 'khaki';
  }
}
