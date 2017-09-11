import { BrowserModule } from '@angular/platform-browser';
import { RouterStateSnapshot } from '@angular/router';
import { NgModule } from '@angular/core';

// Store
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState } from './app.state';

import { CoreModule } from './core/core.module';
import * as reducers from './core/store/reducers';
import * as effects from './core/store/effects';

// https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
export interface RouterStateUrl {
  url: string;
}

export class CustomRouteStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;

    // Only return an object including the URL
    // instead of the entire snapshot
    return { url };
  }
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-base' }),
    CoreModule.forRoot(),

    // ngrx
    StoreModule.forRoot({ core: reducers.reducer, router: routerReducer }, { initialState }),
    EffectsModule.forRoot([effects.CoreEffectsService]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [], //  Retains last 50 states

    AppRoutingModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouteStateSerializer }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
