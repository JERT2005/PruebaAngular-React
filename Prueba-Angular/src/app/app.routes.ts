import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppVentasComponent } from './app-ventas/app-ventas.component';
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'AppVentas',
    component: AppVentasComponent,
  },
];
