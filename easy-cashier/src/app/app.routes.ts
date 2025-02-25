import { Routes } from '@angular/router';
import { MainLayoutComponent } from './presentation/components/layouts/main-layout/main-layout.component';
import { HomeComponent } from './presentation/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
