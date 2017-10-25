import { NgModule } from '@angular/core';
import {
    DateAdapter,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdSelectModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
} from '@angular/material';

const materialModules = [
  MdCardModule,
  MdIconModule,
  MdTabsModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdProgressBarModule,
  MdChipsModule,
  MdSelectModule,
  MdGridListModule,
  MdSnackBarModule,
  MdMenuModule,
  MdDatepickerModule,
  MdNativeDateModule
];

@NgModule({
  exports: [...materialModules]
})
export class MaterialModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    // ISSUE: https://stackoverflow.com/questions/44238116/angular2-material-2-datepicker-output-date-formats
    this.dateAdapter.setLocale('en-GB');
  }
}
