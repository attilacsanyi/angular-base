import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardGuard } from './guards';
import { DashboardComponent } from './views';

export const routingComponents = [DashboardComponent];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    data: { state: 'dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
