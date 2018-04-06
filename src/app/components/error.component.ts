import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.html'
})
export class ErrorComponent{
  public titulo: string;

  constructor(){
    this.titulo = "Lo Sentimos!! Esta Página No se Encuentra. (Error 404)"
  }

  ngOnInit(){
    console.log("Componente Error.component.ts Cargado");
  }
}
