import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResDataComponent } from './res-data.component';
import {AngularMaterialModule} from '../../shared/modules/angular-material.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material';

const route = [
  {path: '', component: ResDataComponent},
  {path: 'res-data', component: ResDataComponent}
];

@NgModule({
  declarations: [
    ResDataComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(route),
    HttpClientModule,
    MatCardModule
  ]
})
export class ResDataModule { }
