import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];
