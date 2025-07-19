import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard';

export const routes: Routes = [
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
