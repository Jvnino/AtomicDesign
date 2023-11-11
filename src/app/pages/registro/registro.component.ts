import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  titulo: string = 'Título del taller';
  color: string = '#007bff';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'] || 'Título del taller';
      this.color = params['color'] || '#007bff';
    });
  }

}

