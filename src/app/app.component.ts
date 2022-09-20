import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPrueba-angular';
  formaciones = [{anio: "2000", titulo: "Bachiller"}, 
  {anio: "2001 - En curso", titulo: "Licenciatura en Economía"}, 
  {anio: "2022", titulo: "Yo Programo. Argentina Programa"},
{anio: "2022", titulo: "Prueba"}];
editable = false;
addeable = false;
contadorAddeable: number[]= [];
formacionAnio = "";
formacionTitulo = "";

toEditable(){
  this.editable = true;
}

toNotEditable(){
  this.editable = false;
  this.contadorAddeable = [];
  this.addeable = false;
  if(this.formacionAnio!="" || this.formacionTitulo!=""){
  this.formaciones.push({anio:this.formacionAnio,titulo:this.formacionTitulo})
  }
  this.formacionAnio = "";
  this.formacionTitulo = "";
}

clean(index: number): void {
  this.formaciones.splice(index, 1);
}

add(){
  this.addeable = true;
  this.contadorAddeable.push(1);
}
}
