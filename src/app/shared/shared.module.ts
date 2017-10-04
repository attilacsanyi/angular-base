import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material (custom)
import { MaterialModule } from './material.module';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import {

} from './components';

const sharedComponents = [];

const dialogComponents = [];

@NgModule({
  imports: [
    // Angular
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule,

    // Material (custom)
    MaterialModule,

    // Flex Layout
    FlexLayoutModule,

  ],
  declarations: [...sharedComponents, ...dialogComponents],
  exports: [
    // Angular
    CommonModule, RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule,

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
