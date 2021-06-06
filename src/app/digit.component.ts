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
  template: `
    <p>Numero {{ numero }}</p>
    <ul>
      <li *ngFor="let d of digits">{{ d }}</li>
    </ul>
  `
})
export class DigitComponent implements OnChanges, OnInit {
  @Input() numero: number;
  digits: number[] = [];

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));

    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      this.digits.push(+to);
    }
  }
}
