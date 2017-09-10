import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';

export const routingComponents = [
  LoadingComponent
];

const routes: Routes = [
  { path: 'loading', component: LoadingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
