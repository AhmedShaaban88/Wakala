import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompaniesComponent } from './companies/companies.component';
import {AllOffersComponent} from './all-offers/all-offers.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyHomeComponent,
    children: [
      {
      path: '',
        component: CompaniesComponent,
        children: [
          {
            path: 'all-offers',
            component: AllOffersComponent
          }
        ]

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
