import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent {
  mostrarTarjetas = true; 

  mostrarBarraDeProgreso() {
    this.mostrarTarjetas = false;
  }

  imprimirEnConsola(): void {
    console.log('Mensaje impreso en la consola desde el HTML');
  }
}
