import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyRoutingModule } from './company-routing.module';
import { AllOffersComponent } from './all-offers/all-offers.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyHomeComponent, CompaniesComponent, AllOffersComponent]
})
export class CompanyModule { }
