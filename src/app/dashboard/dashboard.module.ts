import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';

import { DashboardResolver } from '@dashboard/services';
import * as store from '@dashboard/store';

import { DashboardRoutingModule, routingComponents } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('dashboard', store.reducer, { initialState: store.initialState }),
    EffectsModule.forFeature([store.DashboardEffectsService]),

    DashboardRoutingModule
  ],
  declarations: [...routingComponents],
  providers: [DashboardResolver]
})
export class DashboardModule { }
