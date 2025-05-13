import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidenavComponent} from './public/component/sidebar/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-stock-project';

  options = [
    {link: '/dashboard', name: 'Dashboard'},
    {link: '/products', name: 'Products'},
    {link: '/activity', name: 'Activity'},
    {link: '/alerts', name: 'Alerts'},
    {link: '/sensors', name: 'Sensors'},
    {link: '/configurations', name: 'Configurations'},
    {link: '/support', name: 'Support'}
  ]
}
