import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[onReturn2]'
})
export class OnReturn2Directive {
  private el: ElementRef;
  @Input() onReturn: string;

  constructor(private _el: ElementRef) {
    this.el = this._el;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault();

      var el = document.getElementById('item5');
      el.focus();

      return;
    }
  }
}
