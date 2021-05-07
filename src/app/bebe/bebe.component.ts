import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.css']
})
export class BebeComponent implements OnInit {
  @Output() out: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


}
