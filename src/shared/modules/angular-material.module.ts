import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule, MatIconModule, MatProgressBarModule,
  MatRadioModule, MatSnackBarModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatTabsModule,
  MatRadioModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSnackBarModule

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
