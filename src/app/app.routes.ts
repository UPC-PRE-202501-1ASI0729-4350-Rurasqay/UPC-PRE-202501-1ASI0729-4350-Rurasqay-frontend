import { Routes } from '@angular/router';
import { DashboardComponent } from './public/pages/dashboard/dashboard.component';
const ProductEdit = () => import('./Inventory/components/product-edit/product-edit.component'). then(m => m.ProductEditComponent);
const ProductDetail = () => import('./Inventory/components/product-detail/product-detail.component'). then(m => m.ProductDetailComponent);
const ProductAdd = () => import('./Inventory/components/product-add/product-add.component') .then(m => m.ProductAddComponent);
const ActivityComponent = () => import('./public/pages/activity/activity.component'). then(m => m.ActivityComponent);
const AlertsComponent = () => import('./public/pages/alerts/alerts.component'). then(m => m.AlertsComponent);
const SensorsComponent = () => import('./public/pages/sensors/sensors.component'). then(m => m.SensorsComponent);
const ConfigurationsComponent = () => import('./public/pages/configurations/configurations.component'). then(m => m.ConfigurationsComponent);
const SupportComponent = () => import('./public/pages/support/support.component'). then(m => m.SupportComponent);

export const routes: Routes = [
  { path : 'dashboard', component: DashboardComponent },
  { path: 'products/add', loadComponent: ProductAdd },
  { path: 'products/edit', loadComponent: ProductEdit },
  { path: 'products/detail', loadComponent: ProductDetail },
  { path: 'activity', loadComponent: ActivityComponent},
  { path: 'alerts', loadComponent: AlertsComponent},
  { path: 'sensors', loadComponent: SensorsComponent},
  { path: 'configuration', loadComponent: ConfigurationsComponent},
  { path: 'support', loadComponent: SupportComponent}
];
