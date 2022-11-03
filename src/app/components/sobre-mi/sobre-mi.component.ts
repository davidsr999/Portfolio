import { animate, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { slideInLeft } from 'src/app/animations';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  animations: [
    trigger('inicioPaginaLeft', [
      transition(':enter', [
        animate('0.5s ease-in', keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-100%)'
            }),
            style({
              opacity: 1,
              transform: 'translateX(0)'
            })
          ]))
    ])
    ])
  ]
})

export class SobreMiComponent implements OnInit {
  hide = false;
  hide1 = true;

  cards = document.getElementsByClassName('reveal');

  scrollevent = fromEvent(document, 'scroll')
  .pipe()
  .subscribe(x => {
    console.log(window.scrollY);
    this.myreveal();
  })
  

  
  languages = [{lenguaje: 'HTML y Css', progress: 90},
  {lenguaje: 'JavaScript', progress: 65},
  {lenguaje: 'TypeScript', progress: 55},
  {lenguaje: 'NodeJS', progress: 40},
  {lenguaje: 'MySQL', progress: 30},
  ]

  herramientas = [{herramienta: 'Angular 14', progress: 70},
  {herramienta: 'Git', progress: 55},
  {herramienta: 'MongoDB', progress: 50},
  {herramienta: 'Angular Material', progress: 55},
  {herramienta: 'RxJs', progress: 55},
  ]

  constructor() {
   }

  ngOnInit(): void {
    console.log(`ScrollTop: ${this.offset(this.cards[0]).top}`)
  }

    offset(el: any) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop}

    
  }

  myreveal() {
    for(let i=0; i < this.cards.length; i++) {
      let windowheight  = window.innerHeight;
      let revealtop = this.cards[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if(revealpoint < windowheight - revealtop){
        this.cards[i].classList.add('active');
      } else {
        // this.cards[i].classList.remove('active')
      }
    }
  }


}
