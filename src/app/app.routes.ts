import { Routes } from '@angular/router';
import { DashboardComponent } from './public/pages/dashboard/dashboard.component';
const ProductComponent = () => import('./public/pages/products/products.component'). then(m => m.ProductsComponent);
const ActivityComponent = () => import('./public/pages/activity/activity.component'). then(m => m.ActivityComponent);
const AlertsComponent = () => import('./public/pages/alerts/alerts.component'). then(m => m.AlertsComponent);
const SensorsComponent = () => import('./public/pages/sensors/sensors.component'). then(m => m.SensorsComponent);
const ConfigurationsComponent = () => import('./public/pages/configurations/configurations.component'). then(m => m.ConfigurationsComponent);
const SupportComponent = () => import('./public/pages/support/support.component'). then(m => m.SupportComponent);

export const routes: Routes = [
  { path : 'dashboard', component: DashboardComponent },
  { path: 'products', loadComponent: ProductComponent },
  { path: 'activity', loadComponent: ActivityComponent},
  { path: 'alerts', loadComponent: AlertsComponent},
  { path: 'sensors', loadComponent: SensorsComponent},
  { path: 'configuration', loadComponent: ConfigurationsComponent},
  { path: 'support', loadComponent: SupportComponent}
];
