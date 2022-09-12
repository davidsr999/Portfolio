import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  



  @ViewChild('prueba') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;

  scrollInicio() {
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollSobreMi() {
    window.scrollTo({top: 815.3333435058594,
                      behavior: 'smooth'});
  }

  




  
}
