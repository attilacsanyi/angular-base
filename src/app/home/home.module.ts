import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';

import { components, pipes } from './components';
import { guards } from './guards';
import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { services } from './services';
import { effects, reducers } from './store';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature(effects),

    HomeRoutingModule
  ],
  declarations: [...routingComponents, ...components, ...pipes],
  providers: [...pipes, ...services, ...guards]
})
export class HomeModule {}
