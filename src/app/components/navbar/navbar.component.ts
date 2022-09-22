import { Component, Renderer2, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  display: boolean = true;
  @Output() inicioEmit = new EventEmitter();
  @Output() sobreMiEmit = new EventEmitter();
  @Output() proyectos = new EventEmitter();
  @Output() contacto = new EventEmitter();

  constructor(
  ) { }


  ngOnInit(): void {
    

  }

  onInicio() {
    this.inicioEmit.emit();
  }

  onSobreMi() {
    this.sobreMiEmit.emit();
  }

  
  onClick() {
    this.display = !this.display;
  }

  onProyectos() {
    this.proyectos.emit();
  }

  onContacto() {
    this.contacto.emit();
  }

}
