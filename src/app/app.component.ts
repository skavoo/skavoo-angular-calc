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
  disableButtonCalcola = true;

  maxDigit = 7;
  r1 = null;
  r2 = null;
  r3 = null;
  r4 = null;
  r5 = null;
  r6 = null;

  onReset() {
    this.numero1 = 0;
    this.numero2 = 0;

    this.segno = '';
    this.disableButtonCalcola = true;

    this.r1 = null;
    this.r2 = null;
    this.r3 = null;
    this.r4 = null;
    this.r5 = null;
    this.r6 = null;
  }

  onAddizione() {
    this.segno = '+';
    this.disableButtonCalcola = false;
  }

  onSottrazione() {
    this.segno = '-';
    this.disableButtonCalcola = false;
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
        title: 'Che peccato!',
        text: 'Leo, il risultato non è corretto :(',
        icon: 'error',
        showConfirmButton: false
      });
    }
  }
}
