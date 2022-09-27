import { Component, Renderer2, ElementRef, OnInit, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  display: boolean = true;
  @Output() inicioEmit = new EventEmitter();
  @Output() sobreMiEmit = new EventEmitter();
  @Output() proyectos = new EventEmitter();
  @Output() contacto = new EventEmitter();

  

  constructor(
  ) { }



  onInicio() {
    this.inicioEmit.emit();
    this.display = !this.display;
  }

  onSobreMi() {
    this.sobreMiEmit.emit();
    this.display = !this.display;
  }

  
  onToggle() {
    this.display = !this.display;
  }

  onProyectos() {
    this.proyectos.emit();
    this.display = !this.display;
  }

  onContacto() {
    this.contacto.emit();
    this.display = !this.display;
  }


  onsize() {
    // console.log('cambio')
  }



}
