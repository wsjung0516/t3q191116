import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {AngularMaterialModule} from '../shared/modules/angular-material.module';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import { ReqDataComponent } from './req-data/req-data.component';
import { ImgDetailComponent } from './components/img-detail/img-detail.component';
import {ResDataComponent} from './res-data/res-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImgDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCardModule,
  ],
  providers: [],
  entryComponents: [
    ImgDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
