import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

// Components
const sharedComponents = [];

const dialogComponents = [];

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
  declarations: [...sharedComponents, ...dialogComponents],
  exports: [
    // Angular
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,

    // Flex Layout
    FlexLayoutModule,

    // Shared
    ...sharedComponents
  ],
  // Dialogs
  entryComponents: [...dialogComponents],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
