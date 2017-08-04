import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './app/core/core.module';

@NgModule({
  imports: [
    CoreModule, NoopAnimationsModule,
    // ngrx
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  exports: [CoreModule],
  declarations: [],
  providers: [],
})
export class TestModule { }
