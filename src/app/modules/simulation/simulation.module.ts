import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationRoutingModule } from './simulation-routing.module';
import { SimulationComponent } from './simulation.component';
import { FighterComponent } from './fighter/fighter.component';


@NgModule({
  declarations: [
    SimulationComponent,
    FighterComponent
  ],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SimulationModule { }
