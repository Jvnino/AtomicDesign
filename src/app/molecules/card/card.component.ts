import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() titulo: string = 'titulo';
  @Input() descripcion: string = 'descripcion';
  @Input() enMisCursos: boolean = false; 
  @Input() color: string = '000000'; 

  getColor(titulo: string): string {
    switch (titulo) {
      case 'Taller de HTML':
        return this.color='#007bff'; 
      case 'Taller de CSS':
        return this.color='#ff02ff';
     
      case 'Taller de JS':
        return this.color='#ff0000';
      case 'Metodologías CSS':
        return this.color='#32cd32';
      case 'Frameworks Frontend':
        return this.color='#ffa500';
      case 'Atomic Design':
        return this.color='#ff4500'; 
      default:
        return this.color='#000'; 
    }
  }

  constructor(private router: Router) {}

  registrarTaller() {
    console.log('color', this.color)
    this.router.navigate(['/registro'], { queryParams: { titulo: this.titulo, color: this.color, nombreCurso: this.titulo } });
  }
  

}
