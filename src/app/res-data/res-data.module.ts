import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResDataComponent } from './res-data.component';
import {AngularMaterialModule} from '../../shared/modules/angular-material.module';
import {RouterModule} from '@angular/router';

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
    RouterModule.forChild(route)
  ]
})
export class ResDataModule { }
