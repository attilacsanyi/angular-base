import { NgModule } from '@angular/core';
import {
  MatCardModule, MatIconModule, MatTabsModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatInputModule,
  MatToolbarModule, MatSidenavModule, MatListModule, MatProgressBarModule, MatChipsModule, MatSelectModule, MatGridListModule,
  MatSnackBarModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule,
  MATERIAL_COMPATIBILITY_MODE, MAT_DATE_LOCALE
} from '@angular/material';

const materialModules = [
  MatCardModule, MatIconModule, MatTabsModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDialogModule, MatInputModule,
  MatToolbarModule, MatSidenavModule, MatListModule, MatProgressBarModule, MatChipsModule, MatSelectModule, MatGridListModule,
  MatSnackBarModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule,
];

@NgModule({
  exports: [...materialModules],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class MaterialModule {
}
