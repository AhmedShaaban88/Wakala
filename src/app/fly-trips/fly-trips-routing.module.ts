import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlyTripsHomeComponent } from './fly-trips-home/fly-trips-home.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {
    path: '',
    component: FlyTripsHomeComponent,
    children: [
      {
        path: '',
        component: TripsComponent
    }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyTripsRoutingModule { }
