import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CondosModule} from './condos/condos.module';
import {HotelsModule} from './hotels/hotels.module';
import {CompanyModule} from './company/company.module';
import { FlyTripsModule } from './fly-trips/fly-trips.module';
import {HomeComponent} from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import {CarsModule} from './cars/cars.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'villas',
    loadChildren: () => CondosModule
    // loadChildren: 'app/condos/condos.module#CondosModule'
  },
  {
    path: 'hotels',
    loadChildren: () => HotelsModule
  },
  {
    path: 'cars',
    loadChildren: () => CarsModule
  },
  {
    path: 'company',
    loadChildren: () => CompanyModule
  },
  {
    path: 'fly-trips',
    loadChildren: () => FlyTripsModule
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8kDz25qFYhy1UYiPyrzvcOpkiwZz9C4o'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
