import { NgModule } from '@angular/core';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

import 'hammerjs';

const materialModules = [
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatProgressBarModule,
  MatChipsModule,
  MatSelectModule,
  MatGridListModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule
];

@NgModule({
  exports: [...materialModules],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class MaterialModule {}
