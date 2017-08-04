import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

import { DashboardRoutingModule, routingComponents } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    EffectsModule.forFeature([]),

    DashboardRoutingModule
  ],
  declarations: [...routingComponents]
})
export class DashboardModule { }
