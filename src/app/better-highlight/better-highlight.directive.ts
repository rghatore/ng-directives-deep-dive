import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColour: string = 'khaki';
  // @Input() highlightColour: string = 'salmon';
  @Input('appBetterHighlight') highlightColour: string = 'salmon';
  // @HostBinding('style.backgroundColor') background: string = 'khaki';
  // @HostBinding('style.backgroundColor') background: string = this.defaultColour;
  @HostBinding('style.backgroundColor') background: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'khaki');
    this.background = this.defaultColour;
  }

  @HostListener('mouseenter', ['$event'])
  onEnter(eventData: Event) {
    // console.log('eventData: ', eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'salmon');
    // this.background = 'salmon';
    this.background = this.highlightColour;
  }

  @HostListener('mouseleave') onExit(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'khaki');
    // this.background = 'khaki';
    this.background = this.defaultColour;
  }
}
