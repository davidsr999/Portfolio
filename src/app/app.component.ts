import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
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
export class AppComponent{
  title = 'Portfolio';
  a: boolean = false;
  
  status: boolean = false;

  


  @ViewChild('inicio') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;
  @ViewChild('proyecto') element2!: ElementRef;
  @ViewChild('contacto') element3!: ElementRef;
  @ViewChild('piedepagina') element4!: ElementRef;
  @HostListener('window:scroll') onScroll(e: Event): void {
    // console.log(this.getYPosition);
    this.toggle();
  }
  constructor() {
  }
  

  scrollInicio() {
    console.log('hola')
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



  




  
}
