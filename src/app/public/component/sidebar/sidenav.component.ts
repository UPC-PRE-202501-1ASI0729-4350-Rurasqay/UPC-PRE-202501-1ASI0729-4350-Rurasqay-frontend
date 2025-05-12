// sidenav.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened = false;

  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Activity', icon: 'timeline', route: '/activity' },
    { name: 'Alerts', icon: 'notifications', route: '/alerts' },
    { name: 'Products', icon: 'inventory_2', route: '/products' },
    { name: 'Sensors', icon: 'sensors', route: '/sensors' },
    { name: 'Configurations', icon: 'settings', route: '/configurations' },
    { name: 'Support', icon: 'help', route: '/support' }
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
