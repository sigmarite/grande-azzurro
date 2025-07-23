import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
    { path: 'inventory', loadComponent: () => import('./inventory/inventory').then(m => m.Inventory) },
    { path: '*', redirectTo: '' }
];
