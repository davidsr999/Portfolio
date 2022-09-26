import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';

export interface Carousel  {
  id: number;
  src: string;
  order?: number;
  marginLeft?: number;
}


export const CAROUSEL_DATA: Carousel[] = [
  {
    id: 1,
    src: "assets/wikipediaapp1.png"
  },
  {
    id: 2,
    src: "assets/wikipediaapp2.png"
  },
  {
    id: 3,
    src: "assets/wikipediaapp3.png"
  }
]

export const CAROUSEL_DATA2: Carousel[] = [
  {
    id: 1,
    src: "assets/weatherapp1.png"
  },
  {
    id: 2,
    src: "assets/weatherapp2.png"
  },
  {
    id: 3,
    src: "assets/weatherapp3.png"
  }
]







@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    trigger('toggle', [
      state('in', style({})),
      state('out', style({transform: 'translateX(-53.14rem)'})),
      transition('* => *', [
        animate('1s ease')
      ])
    ])
  ]
  
})
export class ProyectosComponent implements OnInit { 
  public currentPosition = 0;
  height = 500;
  isFullScreen = false;
  // items: Carousel[] = [];
  // carousel_data: Carousel[] = CAROUSEL_DATA;
  items: Carousel[] = CAROUSEL_DATA;
  items2: Carousel[] = CAROUSEL_DATA2;
  /*de otra forma */
  slides = [
    {src: "assets/wikiproject1.png"},
    {src: "assets/wikiproject2.png"},
    {src: "assets/wikiproject3.png"},
    {src: "assets/wikiproject4.png"}
  ]


  constructor() { }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })
    
    console.log(this.items);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find(i => i.id == 0).marginLeft = -100*position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1) {
      finalPercentage = -100*nextPosition;
    } else {
      nextPosition = 0;
    }

    this.items.find(i => i.id == 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0) {
      finalPercentage = -100*backPosition;
    } else {
      backPosition = this.items.length -1;
      finalPercentage = -100*backPosition;
    }

    this.items.find(i => i.id ==0 ).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }
  
}
