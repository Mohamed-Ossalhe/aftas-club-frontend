import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from '@modules/competition/competition-routing.module';
import { ComponentsModule } from '@components/components.module';
import { CompetitionComponent } from './pages/competition/competition.component';


@NgModule({
  declarations: [
    CompetitionComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    ComponentsModule
  ]
})
export class CompetitionModule { }
