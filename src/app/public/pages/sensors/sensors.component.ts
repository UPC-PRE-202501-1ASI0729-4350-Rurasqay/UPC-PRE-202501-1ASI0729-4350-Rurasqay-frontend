import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sensors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  // Datos de ejemplo
  products = [
    { id: 1, name: 'Yogurt Natural', status: '🔴' },
    { id: 2, name: 'Crema facial', status: '🟡' },
    { id: 3, name: 'Vacuna Covid', status: '🟢' }
  ];

  // Función trackBy requerida
  trackById(index: number, item: any): number {
    return item.id;
  }

  ngOnInit() {
    console.log('Componente iniciado', this.products);
  }
}
