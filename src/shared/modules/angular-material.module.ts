import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatProgressBarModule,
  MatRadioModule, MatSnackBarModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

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
  ScrollingModule

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
