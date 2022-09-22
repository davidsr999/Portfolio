import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation block
  ]
})
export class AppComponent {
  title = 'Portfolio';
  a: boolean = false;
  
  status: boolean = false;


  @ViewChild('inicio') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;
  @ViewChild('proyecto') element2!: ElementRef;
  @ViewChild('contacto') element3!: ElementRef;
  @HostListener('window:scroll') onScroll(e: Event): void {
    // console.log(this.getYPosition);
    this.toggle();
  }
  constructor() {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  

  scrollInicio() {
    // console.log('on inicio event');
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
    // console.log('toggled');
  }



  




  
}
