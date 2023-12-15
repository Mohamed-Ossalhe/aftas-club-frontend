import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from '@modules/competition/competition-routing.module';
import { ComponentsModule } from '@components/components.module';
import { CompetitionComponent } from './pages/competition/competition.component';
import { ServicesModule } from '@app/services/services.module';
import { CompetitionService } from '@app/services/competition/competition.service';
import { CreateCompetitionComponent } from './pages/create-competition/create-competition.component';


@NgModule({
  declarations: [
    CompetitionComponent,
    CreateCompetitionComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    ComponentsModule,
  ],
  providers: [
    CompetitionService
  ]
})
export class CompetitionModule { }
