import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var anime: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  @ViewChild('prueba') element!: ElementRef;
  @ViewChild('sobreMi') element1!: ElementRef;

  scrollInicio() {
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollSobreMi() {
    this.element1.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'});
  }





  
}
