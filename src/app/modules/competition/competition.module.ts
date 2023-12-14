import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { ComponentsModule } from '@components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    ComponentsModule
  ]
})
export class CompetitionModule { }
