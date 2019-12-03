import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReqDataComponent} from './req-data.component';
import {AngularMaterialModule} from '../../shared/modules/angular-material.module';
import {RouterModule} from '@angular/router';
import {AngularCropperjsModule} from 'angular-cropperjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ImageCropperComponent } from './imge-cropper/image-cropper.component';
import {NgxsModule} from '@ngxs/store';
import {ReqDataStates} from './store';

const route = [
  {path: '', component: ReqDataComponent},
  {path: 'req-data', component: ReqDataComponent}
];

@NgModule({
  declarations: [
    ReqDataComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(route),
    AngularCropperjsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxsModule.forFeature(ReqDataStates),
  ]
})
export class ReqDataModule { }
