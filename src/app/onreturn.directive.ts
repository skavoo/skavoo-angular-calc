import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[onReturn]'
})
export class OnReturnDirective {
  private el: ElementRef;
  @Input() onReturn: string;
  @Input() maxDigit: number;
  @Input() tipo: string;

  constructor(private _el: ElementRef) {
    this.el = this._el;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if (e.which == 13 || e.keyCode == 13) {
      e.preventDefault();
      var id = +e.srcElement.id.split('item')[1] + 1;
      if (this.tipo === 'risultato') {
        if (
          e.srcElement.value < 0 ||
          e.srcElement.value > 9 ||
          !Number.isInteger(+e.srcElement.value)
        ) {
          e.srcElement.className = 'input-invalid';
        } else {
          e.srcElement.className = 'result-table';
          if (id < this.maxDigit) {
            var nextId = 'item' + id;
            var el = document.getElementById(nextId);
            el.focus();
          }
        }
      } else {
        if (e.srcElement.value != null && e.srcElement.value != '') {
          e.srcElement.className = 'input-evidenziato';
        } else {
          e.srcElement.className = 'result-table';
        }
        if (id < this.maxDigit) {
          var nextId = 'item' + id;
          var el = document.getElementById(nextId);
          el.focus();
        }
      }

      return;
    }
  }
}
