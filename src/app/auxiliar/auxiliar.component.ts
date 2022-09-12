import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AuxiliarComponent implements OnInit {
  toState: string = 'state1';
  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: string) {
    this.toState = state;
  }

}
