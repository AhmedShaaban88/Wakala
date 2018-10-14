import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillasComponent } from './villas/villas.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { CondosRoutingModule } from './condos-routing.module';
import { VillaDetailsComponent } from './villa-details/villa-details.component';
import { VillaHomeComponent } from './villa-home/villa-home.component';

@NgModule({
  imports: [
    CommonModule,
    CondosRoutingModule,
    InViewportModule
  ],
  declarations: [
    VillasComponent,
    VillaDetailsComponent,
    VillaHomeComponent
  ]
})
export class CondosModule { }
