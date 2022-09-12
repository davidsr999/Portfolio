import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subauxiliar',
  templateUrl: './subauxiliar.component.html',
  styleUrls: ['./subauxiliar.component.css']
})
export class SubauxiliarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() currentState: string = '';

}
