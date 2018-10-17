import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsMainComponent } from './cars-main/cars-main.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsRoutingModule } from './cars-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [CarsHomeComponent, CarsMainComponent, CarDetailsComponent]
})
export class CarsModule { }
