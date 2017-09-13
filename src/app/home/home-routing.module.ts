import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components';

export const routingComponents = [
  HomeComponent
];

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { state: 'home' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
