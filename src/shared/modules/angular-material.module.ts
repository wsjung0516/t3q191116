import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatTabsModule,
  MatRadioModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules,
  ],
  exports: [
    MaterialModules
  ]
})
export class AngularMaterialModule { }
