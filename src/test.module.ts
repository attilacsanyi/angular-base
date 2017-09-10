import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './app/core/core.module';
import * as reducers from './app/core/store/reducers';

import { HomeModule } from './app/home/home.module';
import { DashboardModule } from './app/dashboard/dashboard.module';

import { initialState } from './app/app.state';

@NgModule({
  imports: [
    NoopAnimationsModule, RouterTestingModule.withRoutes([]),
    CoreModule, HomeModule, DashboardModule,
    // ngrx
    StoreModule.forRoot({ core: reducers.reducer }, { initialState }),
    EffectsModule.forRoot([]),
  ],
  exports: [CoreModule],
  declarations: [],
  providers: [],
})
export class TestModule { }
