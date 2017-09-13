import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/components';
import { DashboardResolver } from '../dashboard/services';

export const routingComponents = [
  DashboardComponent
];

const routes: Routes = [
  {
    path: '', component: DashboardComponent, resolve: { population: DashboardResolver }, data: { state: 'dashboard' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
