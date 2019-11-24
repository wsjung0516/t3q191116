import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'req-sample_data', pathMatch: 'full'},
  { path: 'req-sample_data',
    loadChildren: () => import('./req-data/req-data.module').then( m => m.ReqDataModule)},
  { path: 'res-sample_data',
    loadChildren: () => import('./res-data/res-data.module').then( m => m.ResDataModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
