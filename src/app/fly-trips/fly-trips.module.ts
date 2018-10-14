import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyTripsRoutingModule } from './fly-trips-routing.module';
import { FlyTripsHomeComponent } from './fly-trips-home/fly-trips-home.component';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  imports: [
    CommonModule,
    FlyTripsRoutingModule
  ],
  declarations: [FlyTripsHomeComponent, TripsComponent]
})
export class FlyTripsModule { }
