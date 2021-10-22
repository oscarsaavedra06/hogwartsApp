import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from '../http-util.service';
import { Personaje } from '../personajes/personajes.component';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  personajes: any
  datasource: Personaje[]
  columnHeader: {}
  displayColumns: string[]
  local: string
  localData: any
  constructor(private httpService: HttpUtilService) {
    this.columnHeader = { name: 'Nombre', patronus: 'Patronus', age: 'Edad', image: 'Imagen' };
    this.displayColumns = ["name", "patronus", "age", "image"]
  }

  ngOnInit(): void {
    

   

    
      this.httpService.get("http://hp-api.herokuapp.com/api/characters/students").subscribe(
        (response) => {
          this.personajes = response;
          this.mapDatasource()
        },
        (error) => { console.log(error); }
      );
  



  }

  mapDatasource() {
    this.datasource = this.personajes.map(function (x: any) {
      return new Personaje(x.name, x.patronus, getAge(x.dateOfBirth as string), x.image)
    });

  }

}

function getAge(arg0: string): number {
  let today = new Date();
  let birthDate = new Date(arg0);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
