import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  toto: number = 0;

  @ViewChildren(EnfantComponent)
  chilchil!: QueryList<EnfantComponent>

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveMessage(param: boolean): void{
    const boucle = this.chilchil.toArray();
    let i = 1;
    let j = 0;
    this.toto = 0;
    for(const c of boucle){
      console.log(i, c.toggle)
      if(c.toggle == true){
        if(i == 1){
          this.toto = this.toto + i;
          console.log("+ " + i)
        } else {
          j = Math.pow(2, i-1);
          console.log("+ " + j)
          this.toto = this.toto + j;
        }
      }
      i++;
    }
  }

  reset(): void{
    this.toto = 0;
    let i = 1;
    const boucle = this.chilchil.toArray();
    for(const c of boucle){
      console.log(i, c.toggle)
      if(c.toggle == true){
        console.log("- " + i)
        c.toggle = false;
      }
      i++;
    }
  }

}
