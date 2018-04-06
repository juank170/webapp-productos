import {Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.html'
})
export class HomeComponent{
  public titulo: string;

  constructor(){
    this.titulo = "WebbApp de Productos";
  }
  ngOnInit(){
    console.log('Se ha Cargado el Componente home.component.ts');
  }
}
