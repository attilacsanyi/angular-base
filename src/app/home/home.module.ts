import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

import * as store from '@home/store';

import { HomeRoutingModule, routingComponents } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    StoreModule.forFeature('home', store.reducer, { initialState: store.initialState }),
    EffectsModule.forFeature([store.HomeEffectsService]),

    HomeRoutingModule
  ],
  declarations: [...routingComponents]
})
export class HomeModule { }
