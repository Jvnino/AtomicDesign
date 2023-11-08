import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() titulo: string = 'titulo';
  @Input() descripcion: string = 'descripcion';

  getColor(titulo: string): string {
    switch (titulo) {
      case 'Taller de HTML':
        return '#007bff'; // Color para el título "Taller de HTML"
      case 'Taller de CSS':
        return '#ff02ff'; // Color para el título "Taller de CSS"
      // Agrega más casos según tus títulos
      case 'Taller de JS':
        return '#ff0000';
      case 'Metodologías CSS':
        return '#32cd32';
      case 'Frameworks Frontend':
        return '#ffa500';
      case 'Atomic Design':
        return '#ff4500'; 
      default:
        return '#000'; // Color predeterminado
    }
  }
}
