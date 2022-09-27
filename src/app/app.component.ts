import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  @HostListener('window:scroll') onScroll(e: Event): void {
    // console.log(this.getYPosition(e));
 }

  listener: any;

  hideCircles = false;
  hide = false;
  is_phone = false;
  private responsive: BreakpointObserver
  constructor(private renderer2: Renderer2,  ) {
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //   console.log('scroll');
    // })
  }

  ngOnInit(): void {
    console.log('Small'+ Breakpoints.Medium);
    this.responsive.observe([
      '(max-width: 750px)'
    ]).subscribe(result => {
      if(result.matches){
        this.hideCircles = true;
        this.hide = true;
        console.log(this.hideCircles);
      } else {
        this.hideCircles  = false;
        this.hide = false;
        console.log(this.hideCircles);
      }
    })
  }
  

  scrollInicio() {
    // console.log('hola')
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollSobreMi() {
    window.scrollTo({top: 815.3333435058594,
                      behavior: 'smooth'}); 
    // this.element1.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});

                      
  }

  scrollProyectos() {
    this.element2.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollContacto() {
    this.element3.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  toggle() {
    this.status = !this.status;
    // console.log('toggled');
  }



  getScrollElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }



  ngOnDestroy(): void {
    this.listener();
}



  




  
}
