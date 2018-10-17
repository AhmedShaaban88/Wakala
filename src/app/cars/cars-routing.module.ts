import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsHomeComponent} from './cars-home/cars-home.component';
import {CarsMainComponent} from './cars-main/cars-main.component';
import {CarDetailsComponent} from './car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    component: CarsHomeComponent,
    children: [
      {
        path: '',
        component: CarsMainComponent
      },
      {
        path: 'details/:name',
        component: CarDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
