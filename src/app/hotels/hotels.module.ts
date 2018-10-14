import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { HotelsRoutingModule } from './hotels-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule,
    InViewportModule
  ],
  declarations: [HotelHomeComponent]
})
export class HotelsModule { }
