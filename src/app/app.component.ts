import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maxDigit = 7;

  numero1 = 0;
  numero2 = 0;
  segno = '';
  risultato = 0;

  r1 = 0;
  r2 = 0;
  r3 = 0;
  r4 = 0;
  r5 = 0;
  r6 = 0;

  onReset() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.segno = '';
  }

  onAddizione() {
    this.segno = '+';
  }

  onSottrazione() {
    this.segno = '-';
  }
}
