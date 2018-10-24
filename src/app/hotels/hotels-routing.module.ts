import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelHomeComponent} from './hotel-home/hotel-home.component';
import {HotelMainComponent} from './hotel-main/hotel-main.component';

const routes: Routes = [
  {
    path: '',
    component: HotelHomeComponent,
    children: [
      {
        path: '',
        component: HotelMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
