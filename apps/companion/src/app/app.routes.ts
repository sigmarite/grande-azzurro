import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'inventory', pathMatch: 'full' },
    { path: 'inventory', loadComponent: () => import('./inventory/inventory').then(m => m.Inventory) },
    { path: '*', redirectTo: '' }
];
