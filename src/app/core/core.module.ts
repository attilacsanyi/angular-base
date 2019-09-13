import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env';

import { initialState } from '@appState';

import { SharedModule } from '@shared/shared.module';

import { components, TitleComponent } from '@core/components';
import { services } from '@core/services';
import { effects } from '@core/store/effects';
import { reducers } from '@core/store/reducers';
import { AppRouterStateSerializer } from '@core/store/reducers/router.reducer';

export const metaReducers: MetaReducer<any>[] = environment.production
  ? []
  : [];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule, // One instance with applied interceptors
    SharedModule.forRoot(),

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
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 50, //  Retains last 50 states
      logOnly: environment.production,
      name: `AB ${environment.env} (@ngrx)`
    })
  ],
  declarations: [...components],
  providers: [],
  exports: [SharedModule, TitleComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: RouterStateSerializer, useClass: AppRouterStateSerializer },
        ...services
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule)
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only!'
      );
  }
}
