import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import * as effects from '../home/store/effects';
import * as reducers from '../home/store/reducers';
import * as states from '../home/store/states';
import { HomeRoutingModule, routingComponents } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('home', reducers.reducer, { initialState: states.initialState }),
    EffectsModule.forFeature([effects.HomeEffectsService]),

    HomeRoutingModule
  ],
  declarations: [...routingComponents]
})
export class HomeModule {}
