import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
