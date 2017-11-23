import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import * as effects from './core/store/effects';
import * as reducers from './core/store/reducers';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState } from './app.state';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-base' }),
    CoreModule.forRoot(),

    // ngrx
    StoreModule.forRoot({ core: reducers.reducer, router: routerReducer }, { initialState }),
    EffectsModule.forRoot([effects.CoreEffectsService, effects.RouterEffectsService]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [], //  Retains last 50 states

    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
