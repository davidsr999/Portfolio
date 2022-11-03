import { transition, trigger, useAnimation } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { slideInLeft, slideInRight } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {

  title = 'Portfolio';
  a: boolean = false;
  
  status: boolean = false;

  


  @ViewChild('inicio') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;
  @ViewChild('proyecto') element2!: ElementRef;
  @ViewChild('contacto') element3!: ElementRef;
  @ViewChild('piedepagina') element4!: ElementRef;
  
//   @HostListener('window:scroll') onScroll(e: Event): void {
//     // console.log(this.getYPosition(e));
//  }

  hide = false;
  is_phone = false;
  private responsive: BreakpointObserver
  constructor( ) {
  }

  ngOnInit(): void {

  }
  

  scrollInicio() {
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollSobreMi() {
    this.element1.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'})              
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
