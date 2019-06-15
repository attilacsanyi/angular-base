import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState } from './app.state';
import { CoreModule } from './core/core.module';
import { effects, reducers } from './core/store';

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-base-server' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    CoreModule.forRoot(),
    AppRoutingModule,

    // ngrx
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
      maxAge: 50, //  Retains last 50 states
      logOnly: environment.production,
      name: `AB ${environment.env} (@ngrx)`
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
