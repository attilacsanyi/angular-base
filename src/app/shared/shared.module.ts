import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { components, dialogs } from '@shared/components';
import { services } from '@shared/services';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Material (custom)
    MaterialModule,

    // Flex Layout
    FlexLayoutModule
  ],
  declarations: [...components, ...dialogs],
  exports: [
    // Angular
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,

    // Flex Layout
    FlexLayoutModule,

    // Shared
    ...components
  ],
  // Dialogs
  entryComponents: [...components],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...services]
    };
  }
}
