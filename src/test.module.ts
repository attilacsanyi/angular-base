import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '@core/core.module';
import { HomeModule } from '@home/home.module';
import { DashboardModule } from '@dashboard/dashboard.module';

@NgModule({
  imports: [
    NoopAnimationsModule, RouterTestingModule,
    CoreModule, HomeModule, DashboardModule,
    // ngrx
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  exports: [CoreModule],
  declarations: [],
  providers: [],
})
export class TestModule { }
