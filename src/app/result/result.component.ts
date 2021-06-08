import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'result-component',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges, OnInit {
  @Input() risultato: number[] = [];

  cifre: number = 4;

  ngOnInit() {
    for (var j = 0, len = this.cifre; j < len; j += 1) {
      this.risultato[j] = j;
    }
  }

  ngOnChanges(changes: SimpleChanges) {}
}
