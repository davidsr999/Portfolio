import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  hide = false;

  
  languages = [{lenguaje: 'HTML y Css', progress: 90},
  {lenguaje: 'JavaScript', progress: 65},
  {lenguaje: 'TypeScript', progress: 55},
  {lenguaje: 'NodeJS', progress: 40},
  {lenguaje: 'MySQL', progress: 30},
]

herramientas = [{herramienta: 'Angular 14', progress: 70},
{herramienta: 'Git', progress: 55},
{herramienta: 'MongoDB', progress: 50},
{herramienta: 'Angular Material', progress: 55},
{herramienta: 'RxJs', progress: 55},
]

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe([
      '(max-width: 600px)'
    ]).subscribe(result => {
      if(result.matches){
        this.hide = true;
        console.log(this.hide);
      } else {
        this.hide  = false;
        console.log(this.hide);
      }
    })
  }

}
