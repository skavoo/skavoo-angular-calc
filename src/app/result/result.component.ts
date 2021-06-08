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
  @Input() numero: number[] = [];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
