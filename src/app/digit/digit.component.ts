import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'digit-component',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css']
})
export class DigitComponent implements OnChanges, OnInit {
  @Input() numero: number;
  @Input() segno: string;
  digits: string[] = [];

  cifreIntere: number = 4;
  cifreDecimali: number = 2;

  ngOnInit() {
    for (
      var j = 0, len = this.cifreIntere + this.cifreDecimali + 1;
      j < len;
      j += 1
    ) {
      if (j === this.cifreIntere) {
        this.digits.push(',');
      } else {
        this.digits.push('\u00A0\u00A0');
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['numero'] && !changes.numero.firstChange) {
      this.digits = [];
      if (changes.numero.currentValue == null) {
        this.ngOnInit();
      } else {
        const change = changes['numero'];
        const to = JSON.stringify(change.currentValue);
        const from = JSON.stringify(change.previousValue);

        var splitted = to.split('.');

        // left padding
        for (
          var i = 0, len = this.cifreIntere - splitted[0].length;
          i < len;
          i += 1
        ) {
          this.digits.push('\u00A0\u00A0');
        }

        // parte intera
        for (var i = 0, len = splitted[0].length; i < len; i += 1) {
          if (i < this.cifreIntere) {
            this.digits.push(splitted[0].charAt(i));
          }
        }

        // virgola
        this.digits.push(',');

        // parte decimale
        if (splitted[1]) {
          for (var i = 0, len = splitted[1].length; i < len; i += 1) {
            if (i < this.cifreDecimali) {
              this.digits.push(splitted[1].charAt(i));
            }
          }
          // right padding dei decimali
          if (splitted[1].length < this.cifreDecimali) {
            for (
              var i = 0, len = this.cifreDecimali - splitted[1].length;
              i < len;
              i += 1
            ) {
              this.digits.push('0');
            }
          }
        }
        // se la parte decimale manca riempi di 0
        else {
          for (var i = 0, len = this.cifreDecimali; i < len; i += 1) {
            this.digits.push('0');
          }
        }
      }
    }
  }
}
