import { Component, Input, OnInit } from '@angular/core';
import { Carousel, CAROUSEL_DATA } from '../proyectos.component';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input() items: Carousel[];
  public currentPosition = 0;
  marginLeft = 0;



  constructor() { }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })

    console.log(this.items.length-1);

  }



  setBack() {
    if(this.currentPosition > 0) {
      this.marginLeft += 28
      this.currentPosition += -1;
    } else {
      this.marginLeft = -(this.items.length-1)*28;
      this.currentPosition = 3;
    }


    console.log(this.currentPosition);
  }

  setNext() {
    if(this.currentPosition < this.items.length -1) {
      this.marginLeft += -28;
      this.currentPosition += 1;
    } else {
      this.marginLeft = 0;
      this.currentPosition = 0;
    }

  }

}
