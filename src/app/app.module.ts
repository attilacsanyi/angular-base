import { NgModule } from '@angular/core';

// Store
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '@environment/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState } from './app.state';

import { CoreModule } from '@core/core.module';
import * as core from '@core/store';

@NgModule({
  imports: [
    CoreModule.forRoot(),

    // Store
    StoreModule.forRoot({ core: core.reducer }, { initialState }),
    EffectsModule.forRoot([core.CoreEffectsService]),

    // ISSUE: store-devtools currently causes severe performance problems when used with router-store.
    // We are working to fix this, but for now, avoid using them together.
    // https://github.com/ngrx/platform/issues/97
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [], //  Retains last 50 states

    AppRoutingModule,
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
