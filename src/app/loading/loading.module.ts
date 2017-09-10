import { NgModule } from '@angular/core';

import { LoadingRoutingModule, routingComponents } from './loading-routing.module';

@NgModule({
  declarations: [...routingComponents],
  imports: [LoadingRoutingModule]
})
export class LoadingModule { }
