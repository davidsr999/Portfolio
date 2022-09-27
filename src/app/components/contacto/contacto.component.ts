import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';




@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
 
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name : ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      comentario: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.form.value);

    let name = this.form.controls['name'].value;
    let apellidos = this.form.controls['apellidos'].value;
    let email = this.form.controls['email'].value;
    let comentario = this.form.controls['comentario'].value;

    // let el = document.querySelector('.out');
    // el.innerHTML += `nombre: ${name}; apellidos: ${apellidos}; email: ${email}; comentario: ${comentario}`;

    
    
    
  }

  getErrorMessage() {
  //  console.log(this.form.controls['email'])
  }
  

}
