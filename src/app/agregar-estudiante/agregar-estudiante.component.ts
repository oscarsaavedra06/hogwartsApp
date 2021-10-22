import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit, OnChanges {

  estudianteForm: FormGroup
  localData: any
  columnHeader: any
  displayColumns: any



  constructor(private fb: FormBuilder) {
    this.columnHeader = { name: 'Nombre', patronus: 'Patronus', age: 'Edad', image: 'Imagen' };
    this.displayColumns = ["name", "patronus", "age", "image"]
  }

  ngOnInit(): void {
    this.estudianteForm = this.fb.group({
      name: new FormControl('', [
        Validators.required

      ]),
      age: new FormControl(0),
      patronus: new FormControl(''),
      image: new FormControl('')
    })

    this.getLocalData()
  }

  ngOnChanges(): void {

    alert("cambio")
  }

  onSubmit() {
    let getter = sessionStorage.getItem("data")
    if (getter == null) {
      sessionStorage.setItem("data", `[${JSON.stringify(this.estudianteForm.value)}]`)

    } else {
      getter = getter.replace("]", ",")
      sessionStorage.setItem("data", `${getter += JSON.stringify(this.estudianteForm.value)}]`)
    }
    this.getLocalData()
    this.estudianteForm.reset()
  }

  getLocalData() {
    let stringData = sessionStorage.getItem("data") ?? "";
    if (stringData !== "") {
      this.localData = JSON.parse(stringData);


    }
  }

}
