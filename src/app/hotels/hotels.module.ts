import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { HotelMainComponent } from './hotel-main/hotel-main.component';


@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule,
    InViewportModule
  ],
  declarations: [HotelHomeComponent, HotelMainComponent]
})
export class HotelsModule { }
