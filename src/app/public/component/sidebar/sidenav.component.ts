import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
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
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  opened = false;
  isProductsExpanded = false;

  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    {
      name: 'Products',
      icon: 'inventory_2',
      route: null,
      children: [
        { name: 'List Products', route: '/products/list' },
        { name: 'Add Product', route: '/products/add' },
        { name: 'Categories', route: '/products/categories' }
      ]
    },
    { name: 'Activity', icon: 'swap_vert', route: '/activity' },
    { name: 'Alerts', icon: 'notifications', route: '/alerts' },
    { name: 'Sensors', icon: 'sensors', route: '/sensors' },
    { name: 'Configuration', icon: 'settings', route: '/configuration' },
    { name: 'Support', icon: 'help', route: '/support' }
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleProductsMenu() {
    this.isProductsExpanded = !this.isProductsExpanded;
    if (this.isProductsExpanded) {
      this.trigger.openMenu();
    } else {
      this.trigger.closeMenu();
    }
  }
}
