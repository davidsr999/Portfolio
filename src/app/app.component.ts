import {  Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  useAnimation,
  // ...
} from '@angular/animations';
import { slideInLeft, slideInRight } from './animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation block
    trigger('inicioPaginaLeft', [
      transition(':enter', [
        useAnimation(slideInLeft)
      ])
    ]),
    trigger('inicioPaginaRight', [
      transition(':enter', [
        useAnimation(slideInRight)
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Portfolio';
  a: boolean = false;
  
  status: boolean = false;

  


  @ViewChild('inicio') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;
  @ViewChild('proyecto') element2!: ElementRef;
  @ViewChild('contacto') element3!: ElementRef;
  @ViewChild('piedepagina') element4!: ElementRef;

  listener: any;

  hideCircles = false;
  hide = false;
  is_phone = false;
  constructor(  ) {
  }

  ngOnInit(): void {
  }
  

  scrollInicio() {
    // console.log('hola')
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollSobreMi() {
    window.scrollTo({top: 815.3333435058594,
                      behavior: 'smooth'}); 

                      
  }

  scrollProyectos() {
    this.element2.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollContacto() {
    this.element3.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  toggle() {
    this.status = !this.status;
  }



  getScrollElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }



  ngOnDestroy(): void {
}



  




  
}
