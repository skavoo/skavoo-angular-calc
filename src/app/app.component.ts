import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1 = 0;
  numero2 = 0;

  segno = '';

  maxDigit = 12;
  r1 = null;
  r2 = null;
  r3 = null;
  r4 = null;
  r5 = null;
  r6 = null;

  rip1 = null;
  rip2 = null;
  rip3 = null;
  rip4 = null;
  rip5 = null;

  onReset() {
    this.numero1 = 0;
    this.numero2 = 0;

    this.segno = '';

    this.r1 = null;
    this.r2 = null;
    this.r3 = null;
    this.r4 = null;
    this.r5 = null;
    this.r6 = null;

    this.rip1 = null;
    this.rip2 = null;
    this.rip3 = null;
    this.rip4 = null;
    this.rip5 = null;

    for (var j = 1; j < 13; j += 1) {
      var item = 'item' + j;
      document.getElementById(item).className = 'result-table';
    }
  }

  validateDigit(id) {
    var el = <HTMLInputElement>document.getElementById(id);
    if (+el.value < 0 || +el.value > 9 || !Number.isInteger(+el.value)) {
      el.className = 'input-invalid';
    } else {
      el.className = 'result-table';
    }
  }

  onAddizione() {
    this.segno = '+';
  }

  onSottrazione() {
    this.segno = '-';
  }

  disableButtonCalcola() {
    if (this.segno === '') {
      return true;
    }
    if (
      (this.r1 === null || this.r1 === '') &&
      (this.r2 === null || this.r2 === '') &&
      (this.r3 === null || this.r3 === '') &&
      (this.r4 === null || this.r4 === '') &&
      (this.r5 === null || this.r5 === '') &&
      (this.r6 === null || this.r6 === '')
    ) {
      return true;
    }

    return false;
  }

  onCalcola() {
    var calcolo = null;

    if (this.segno === '+') {
      calcolo = this.numero1 + this.numero2;
    } else if (this.segno === '-') {
      calcolo = this.numero1 - this.numero2;
    } else {
    }

    var risultato = '';
    if (this.r6 != null) {
      risultato += this.r6;
    }
    if (this.r5 != null) {
      risultato += this.r5;
    }
    if (this.r4 != null) {
      risultato += this.r4;
    }
    if (this.r3 != null) {
      risultato += this.r3;
    }
    risultato += '.';
    if (this.r2 != null) {
      risultato += this.r2;
    }
    if (this.r1 != null) {
      risultato += this.r1;
    }

    var risultatoNbr = Number(risultato);
    if (risultatoNbr == calcolo) {
      Swal.fire({
        title: 'Bravo!',
        text: 'Leo, il risultato è corretto :)',
        icon: 'success',
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        title: 'Oh no!',
        text: 'Leo, il risultato non è corretto :(',
        icon: 'error',
        showConfirmButton: false
      });
    }
  }
}
