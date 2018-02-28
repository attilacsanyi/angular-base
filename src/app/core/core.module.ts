import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterStateSerializer } from '@ngrx/router-store';

import { SharedModule } from '@shared/shared.module';

import { components, TitleComponent } from '@core/components';
import { services } from '@core/services';
import { AppRouterStateSerializer } from '@core/store/reducers/router.reducer';

// Components
@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule, // One instance with applied interceptors
    SharedModule.forRoot()
  ],
  declarations: [...components],
  providers: [],
  exports: [SharedModule, TitleComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: RouterStateSerializer, useClass: AppRouterStateSerializer }, ...services]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
  }
}
