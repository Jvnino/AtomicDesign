import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  nombreCurso: string =''
  color: string=''

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: number = 0;
  registroCompleto: boolean = false;
  noRegistro: boolean = false;

  nombreError: boolean = false;
  apellidoError: boolean = false;
  correoError: boolean = false;
  telefonoError: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombreCurso = params['titulo'] || 'Título del taller';
      this.color = params['color'] || '#007bff';
    });
  }
  
  submitForm() {
        if (!this.nombre) {
          this.nombreError = true;
      } else {
          this.nombreError = false;
      }

      if (!this.apellido) {
          this.apellidoError = true;
      } else {
          this.apellidoError = false;
      }

      if (!this.correo) {
          this.correoError = true;
      } else {
          this.correoError = false;
      }

      if (!this.telefono) {
          this.telefonoError = true;
      } else {
          this.telefonoError = false;
      }


      if (this.nombre && this.apellido && this.correo && this.telefono) {
        alert('¡Registro exitoso! Gracias por registrarte.');
      }
  }
}
