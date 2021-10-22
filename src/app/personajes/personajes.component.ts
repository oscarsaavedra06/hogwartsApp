import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from '../http-util.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export class Personaje {
  constructor(
    public name: string,
    public patronus: string,
    public age: number,
    public image: string
  ) { }
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: any
  datasource: Personaje[]
  columnHeader: {}
  displayColumns: string[]

  constructor(private httpService: HttpUtilService) {
    this.columnHeader = { name: 'Nombre', patronus: 'Patronus', age: 'Edad', image: 'Imagen' };
    this.displayColumns = ["name", "patronus", "age", "image"]

  }

  ngOnInit(): void {
  }

  getItems(e: any) {
    let casa = e.currentTarget.value;
    this.httpService.get("http://hp-api.herokuapp.com/api/characters/house/" + casa).subscribe(
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

