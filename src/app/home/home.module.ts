import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule, routingComponents } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,

    // ngrx
    EffectsModule.forFeature([]),

    HomeRoutingModule
  ],
  declarations: [...routingComponents]
})
export class HomeModule { }
