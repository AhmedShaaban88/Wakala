import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillaHomeComponent } from './villa-home/villa-home.component';
import { VillasComponent } from './villas/villas.component';
import {VillaDetailsComponent} from './villa-details/villa-details.component';

const routes: Routes = [
  {
    path: '',
    component: VillaHomeComponent,
    children: [
      {
        path: '',
        component: VillasComponent

      },
      {
        path: 'villas/details/:name',
        component: VillaDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondosRoutingModule { }
