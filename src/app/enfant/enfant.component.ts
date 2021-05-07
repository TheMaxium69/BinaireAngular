import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  toggle: boolean = false;

  @Output() out: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    if(this.toggle == false){
      this.toggle = true;
    }else{
      this.toggle = false;
    }

    console.log("resulata du boolean = " + this.toggle)
    this.out.emit();
  }

}
