import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';

import { components, pipes } from './components';
import { DashboardRoutingModule, routingComponents } from './dashboard-routing.module';
import { guards } from './guards';
import { services } from './services';
import { effects, reducers } from './store';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature(effects),

    DashboardRoutingModule
  ],
  declarations: [...routingComponents, ...components, ...pipes],
  providers: [...pipes, ...services, ...guards]
})
export class DashboardModule {}
