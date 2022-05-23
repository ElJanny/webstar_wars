import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSelectRoutingModule } from './character-select-routing.module';
import { CharacterSelectComponent } from './character-select.component';
import { CharacterDataComponent } from './character-data/character-data.component';
import { CharacterSweepComponent } from './character-sweep/character-sweep.component';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    CharacterSelectComponent,
    CharacterDataComponent,
    CharacterSweepComponent
  ],
  imports: [
    CommonModule,
    CharacterSelectRoutingModule,
    SharedModule,
    MaterialModule,
    SwiperModule
  ],
  providers:[ ]
})
export class CharacterSelectModule { }
