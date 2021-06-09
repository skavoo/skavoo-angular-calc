import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[onReturn]'
})
export class OnReturnDirective {
  private el: ElementRef;
  @Input() onReturn: string;
  @Input() maxDigit: number;

  constructor(private _el: ElementRef) {
    this.el = this._el;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      var id = +e.srcElement.id.split('item')[1] + 1;
      if (
        e.srcElement.value < 0 ||
        e.srcElement.value > 9 ||
        !Number.isInteger(+e.srcElement.value)
      ) {
        e.srcElement.value = '';
      } else {
        if (id < this.maxDigit) {
          var nextId = 'item' + id;
          var el = <HTMLInputElement>document.getElementById(nextId);
          el.value = '';
          el.focus();
        }
      }
      return;
    }
  }
}
