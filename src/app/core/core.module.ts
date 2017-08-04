import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

// Components
import { TitleComponent } from '@core/components';

@NgModule({
  imports: [
    BrowserAnimationsModule,

    SharedModule.forRoot(),
    EffectsModule.forFeature([])
  ],
  declarations: [TitleComponent],
  providers: [],
  // Dynamically loaded comonents here
  entryComponents: [],
  exports: [SharedModule, TitleComponent],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
    }
  }
}
