import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { DashboardResolver } from '../dashboard/services';
import * as reducers from '../dashboard/store/reducers';
import * as effects from '../dashboard/store/effects';
import * as states from '../dashboard/store/states';

import { DashboardRoutingModule, routingComponents } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('dashboard', reducers.reducer, { initialState: states.initialState }),
    EffectsModule.forFeature([effects.DashboardEffectsService]),

    DashboardRoutingModule
  ],
  declarations: [...routingComponents],
  providers: [DashboardResolver]
})
export class DashboardModule { }
