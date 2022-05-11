import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardGuard } from './guard/auth-guard.guard';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardGuard],
    canLoad: [AuthGuardGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
