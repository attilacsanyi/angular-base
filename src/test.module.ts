import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '@core/core.module';
import * as core from '@core/store';

import { HomeModule } from '@home/home.module';
import { DashboardModule } from '@dashboard/dashboard.module';

import { initialState } from './app/app.state';

@NgModule({
  imports: [
    NoopAnimationsModule, RouterTestingModule.withRoutes([]),
    CoreModule, HomeModule, DashboardModule,
    // ngrx
    StoreModule.forRoot({ core: core.reducer }, { initialState }),
    EffectsModule.forRoot([]),
  ],
  exports: [CoreModule],
  declarations: [],
  providers: [],
})
export class TestModule { }
