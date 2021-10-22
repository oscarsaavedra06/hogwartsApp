import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'nuevo-estudiante', component: AgregarEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
