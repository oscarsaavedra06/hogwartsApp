import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  estudianteForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.estudianteForm = this.fb.group({
      name: new FormControl('', [
        Validators.required

      ]),
      age: new FormControl(0),
      patronus: new FormControl(''),
      image: new FormControl('')
    })
  }


  onSubmit() {
    let getter = sessionStorage.getItem("data")
    if (getter == null) {
      sessionStorage.setItem("data", `[${JSON.stringify(this.estudianteForm.value)}]`)

    } else {
      getter = getter.replace("]", ",")
      sessionStorage.setItem("data", `${getter += JSON.stringify(this.estudianteForm.value)}]`)
    }
  }


}
