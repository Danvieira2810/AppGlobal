import { Routes } from '@angular/router';
import { Assistencia } from './assistencia/assistencia';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
    path: 'assistencia', component: Assistencia
  },
  { path: '**', redirectTo: 'home' }
];
