import { Route } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

export const appRoutes: Route[] = [
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '/table' },
];
