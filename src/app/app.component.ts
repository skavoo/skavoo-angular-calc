import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1 = 0;
  numero2 = 0;
  segno = '';

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
