import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {LayoutModule} from '@angular/cdk/layout';
import {OverlayModule} from '@angular/cdk/overlay';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/proyectos/card/card.component';
import { Card2Component } from './components/proyectos/card2/card2.component';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './components/home/home.component';









@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NavbarComponent,
    ProyectosComponent,
    SobreMiComponent,
    CardComponent,
    Card2Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    OverlayModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
