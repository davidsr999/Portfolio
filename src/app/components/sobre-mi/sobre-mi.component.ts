import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {


  
  languages = [{lenguaje: 'HTML 5', progress: 90},
  {lenguaje: 'CSS', progress: 80},
  {lenguaje: 'JavaScript', progress: 70},
  {lenguaje: 'TypeScript', progress: 65},
  {lenguaje: 'NodeJS', progress: 30},
]

herramientas = [{herramienta: 'Angular 14', progress: 75},
{herramienta: 'VSCode', progress: 80}
]

  constructor() { }

  ngOnInit(): void {
  }

}
