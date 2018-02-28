import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views';

export const routingComponents = [HomeComponent];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
