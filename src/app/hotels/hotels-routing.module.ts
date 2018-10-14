import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelHomeComponent} from './hotel-home/hotel-home.component';

const routes: Routes = [
  {
    path: '',
    component: HotelHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
