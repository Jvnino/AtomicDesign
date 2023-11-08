import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent {
  mostrarTarjetas = true; // Por defecto, mostrar las tarjetas

  // Lógica para cambiar a la barra de progreso cuando sea necesario
  // Por ejemplo, cuando se hace clic en "Mis Cursos"
  mostrarBarraDeProgreso() {
    this.mostrarTarjetas = false;
  }
}
