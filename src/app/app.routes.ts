import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/recargas', pathMatch: 'full'},
  {
    path: 'recargas',
    loadComponent: () => import('./presentation/recharge-form/recharge-form.component').then(m => m.RechargeFormComponent)
  },
  {
    path: 'listar-recargas',
    loadComponent: () => import('./presentation/recharge-list/recharge-list.component').then(m => m.RechargeListComponent)
  }
];
