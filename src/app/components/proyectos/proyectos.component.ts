import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    trigger('toggle', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),
      transition('* => *', [
        animate('1s ease')
      ])
    ])
  ]
  
})
export class ProyectosComponent implements OnInit {

  istate: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }

  toggle() {
    console.log(this.istate);
    this.istate = !this.istate;
  }

  
}
